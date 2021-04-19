//react
import { useEffect, useMemo } from "react";

//apollo stuff
import { useLazyQuery } from "@apollo/client";
import { submittedSearchTermVar } from "../../Apollo/cache";
import { useReactiveVar } from "@apollo/client";
import { SEARCH_ARTISTS } from "../../Apollo/queries";

//sub-components
import Alert from "../Common/Alert";
import Intro from "./Intro";
import ListOfArtists from "./ListOfArtists";
import Loader from "../Common/Loader";
import Search from "./Search";
import WelcomeMessage from "./WelcomeMessage";
import WithNavbar from "../Common/WithNavbar";

//others
import { removeDuplicates } from "../../helpers";
import debounce from "lodash.debounce";
import { FETCH_MORE_SCROLL_MARGIN } from "../../constants-and-settings";

/*
Notes:
Explanations for submittedSearchTerm and searchTerm in Apollo/cache to 
*/

const Home = () => {
  //local state variable (apollo)
  const submittedSearchTerm = useReactiveVar(submittedSearchTermVar);

  //A lazy query so we search when there is non null value in the `submittedSearchTerm`
  const [getArtists, { loading, error, data, fetchMore }] = useLazyQuery(
    SEARCH_ARTISTS
  );

  //goal: Fetch the artists when submittedSearchTerm is changed. As this the first fetch for this given search term, set the endcursor to ""
  useEffect(() => {
    if (submittedSearchTerm) {
      getArtists({
        variables: {
          searchValue: submittedSearchTerm,
          endCursor: "",
        },
      });
    }
  }, [submittedSearchTerm, getArtists]);

  // A memorized Debounce function responsible for fetching more results when the scrolling reach the end
  // Todo: inspect why sometimes fetchmore returns an error (cannot access property fetchmore of undefined).
  const debouncedOnScroll = useMemo(
    () =>
      debounce(() => {
        if (!data) {
          return;
        }
        const { hasNextPage, endCursor } = data?.search?.artists?.pageInfo;
        if (
          hasNextPage &&
          submittedSearchTerm &&
          fetchMore &&
          window.innerHeight + window.scrollY + FETCH_MORE_SCROLL_MARGIN >=
            document.body.offsetHeight
        ) {
          try {
            fetchMore({
              query: SEARCH_ARTISTS,
              variables: {
                searchValue: submittedSearchTerm,
                endCursor: endCursor || "",
              },
            });
          } catch {
            console.log("could not fetch more posts");
          }
        }
      }, 50),
    [fetchMore, submittedSearchTerm, data]
  );

  //Goal: Add an event listener for the scrolling of the window for infinte scrolling
  useEffect(() => {
    window.addEventListener("scroll", debouncedOnScroll);
    return () => {
      window.removeEventListener("scroll", debouncedOnScroll);
    };
  }, [debouncedOnScroll]);

  //4 possible scenarios for conditional rendering
  const RenderLoading = () => {
    return (
      <div>
        <div className="w-full">
          <Loader />
        </div>
      </div>
    );
  };
  const RenderError = () => {
    // Todo: Make it more helpful for the user.
    return (
      <div>
        <Alert
          message="There was a problem fetching the necessary data"
          type="error"
        />
      </div>
    );
  };
  const RenderEmpty = () => {
    // This function will be returned either when there was a seacrh and there are no results or when there is no search (e.g on launch)
    return (
      <div>
        <div className="w-full h-full ">
          {!submittedSearchTerm ? (
            <Intro />
          ) : (
            <p className="text-lg font-semibold my-8">
              No results found for "
              <span className="text-green-swap">{submittedSearchTerm}</span>"
            </p>
          )}
        </div>
      </div>
    );
  };
  const RenderMainContent = () => {
    const { hasNextPage } = data?.search?.artists?.pageInfo;

    //For some reason, there are some duplicates in the data. Todo: When fetching the data, assign mbid as the main id (and make the necessary fixs for apollo cache)
    const artists = removeDuplicates(
      data?.search?.artists?.edges.map((edge) => edge.node),
      "mbid"
    );
    return (
      <div className="flex flex-col space-y-7">
        <ListOfArtists artists={artists} />
        {!hasNextPage && (
          <div className="w-full flex items-end justify-center pt-5 text-xs font-medium text-green-swap">
            No more results
          </div>
        )}
      </div>
    );
  };
  const ConditionalRendering = () => {
    if (error) return RenderError();
    if (loading) return RenderLoading();
    if (!data?.search.artists.edges.length) return RenderEmpty();
    return RenderMainContent();
  };

  return (
    <WithNavbar>
      <div className="w-full flex flex-col space-y-10">
        <WelcomeMessage />
        <Search />
        <div className="flex-grow">{ConditionalRendering()}</div>
      </div>
    </WithNavbar>
  );
};
export default Home;
