import { useLazyQuery, gql, useReactiveVar } from "@apollo/client";
import { useEffect, useMemo } from "react";
import Button from "../Common/Button";
import SearchSuggestions from "./SearchSuggestions";
import { FaSearch } from "react-icons/fa";
import { useMenuToggler } from "../../custom-hooks";
import debounce from "lodash.debounce";
import { searchTermVar } from "../../cache";

const GET_SEARCH_SUGGESTIONS = gql`
  query GetArtists($searchValue: String!) {
    search {
      artists(query: $searchValue, first: 8) {
        nodes {
          id
          mbid
          name
        }
      }
    }
  }
`;

const Search = () => {
  // const [inputValue, setInputValue] = useState({
  //   changedViaKey: false,
  //   value: "",
  // });

  const searchTerm = useReactiveVar(searchTermVar);

  const [
    suggestionsVisible,
    ,
    showSuggestions,
    hideSuggestions,
    searchRef,
  ] = useMenuToggler();

  const [
    getSearchSuggestions,
    { loading, error, data },
  ] = useLazyQuery(GET_SEARCH_SUGGESTIONS, { fetchPolicy: "no-cache" });

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        if (value) {
          getSearchSuggestions({ variables: { searchValue: value } });
        }
      }, 200),
    [getSearchSuggestions]
  );
  useEffect(() => {
    if (!searchTerm.ready) {
      debouncedSearch(searchTerm.value);
    }
  }, [searchTerm, debouncedSearch]);

  const onSuggestionClicked = (value) => {
    searchTermVar({ ready: true, value });
    hideSuggestions();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hideSuggestions();
    searchTermVar({ ...searchTermVar(), ready: true });
  };
  if (error) return <p>Error :(</p>;

  return (
    <form
      className="flex items-center w-full  relative"
      ref={searchRef}
      onSubmit={handleSubmit}
    >
      <input
        onFocus={showSuggestions}
        spellCheck={false}
        className="h-16 w-full bg-transparent text-white border-b-2 border-gray-100  text-lg md:text-xl lg:text-2xl focus:outline-none focus:border-green-swap"
        placeholder="Search for an artist..."
        value={searchTerm.value}
        onChange={(e) => {
          searchTermVar({ ready: false, value: e.target.value });
        }}
      />
      <Button
        className="absolute text-xl right-2 focus-inside"
        type="text"
        color="green"
      >
        <FaSearch />
      </Button>
      {suggestionsVisible && searchTerm.value && (
        <div className="absolute z-10 top-16 left-0 w-full pt-2">
          <SearchSuggestions
            options={data?.search?.artists?.nodes}
            onSuggestionClicked={onSuggestionClicked}
            loading={loading}
          />
        </div>
      )}
    </form>
  );
};
export default Search;
