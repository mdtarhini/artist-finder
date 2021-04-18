import { useLazyQuery, gql } from "@apollo/client";
import Search from "./Search";
import WelcomeMessage from "./WelcomeMessage";
import ListOfArtists from "./ListOfArtists";
import Loader from "../Common/Loader";
import { removeDuplicates } from "../../helpers";
import { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import Intro from "./Intro";
import { searchTermVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";
import WithNavbar from "../Common/WithNavbar";
const SEARCH_ARTISTS = gql`
  query GetArtists($searchValue: String!, $endCursor: String!) {
    search {
      artists(query: $searchValue, first: 18, after: $endCursor) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            mbid
            name
            disambiguation
            type
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [getArtists, { loading, error, data, fetchMore }] = useLazyQuery(
    SEARCH_ARTISTS
  );

  const searchTerm = useReactiveVar(searchTermVar);

  useEffect(() => {
    if (searchTerm.ready) {
      getArtists({
        variables: {
          searchValue: searchTerm.value,
          endCursor: "",
        },
      });
    }
  }, [searchTerm, getArtists]);
  const debouncedOnScroll = useMemo(
    () =>
      debounce(() => {
        if (!data) {
          return;
        }
        const { hasNextPage, endCursor } = data?.search?.artists?.pageInfo;
        if (
          hasNextPage &&
          searchTerm.ready &&
          fetchMore &&
          window.innerHeight + window.scrollY + 30 >= document.body.offsetHeight
        ) {
          try {
            fetchMore({
              query: SEARCH_ARTISTS,
              variables: {
                searchValue: searchTerm.value,
                endCursor: endCursor || "",
              },
            });
          } catch {
            console.log("could not fetch more posts");
          }
        }
      }, 50),
    [fetchMore, searchTerm, data]
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedOnScroll);
    return () => {
      window.removeEventListener("scroll", debouncedOnScroll);
    };
  }, [debouncedOnScroll]);

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
    return (
      <div>
        <span>Error</span>
      </div>
    );
  };
  const RenderEmpty = () => {
    return (
      <div>
        <div className="w-full h-full ">
          {!searchTerm.ready ? (
            <Intro />
          ) : (
            <p className="text-lg font-semibold my-8">
              No results found for "
              <span className="text-green-swap">{searchTerm.value}</span>"
            </p>
          )}
        </div>
      </div>
    );
  };
  const RenderMainContent = () => {
    const { hasNextPage } = data?.search?.artists?.pageInfo;
    const artists = removeDuplicates(
      data?.search?.artists?.edges.map((edge) => edge.node),
      "mbid"
    );
    return (
      <div className="flex flex-col space-y-7">
        <ListOfArtists artists={artists} />
        {!hasNextPage && (
          <div className="w-full flex items-end pt-5 justify-center text-green-swap text-xs font-medium">
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
