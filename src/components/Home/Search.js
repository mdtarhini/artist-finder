//react
import { useEffect, useMemo } from "react";

//custom hooks
import { useMenuToggler } from "../../custom-hooks";

//apollo stuff
import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { searchTermVar, submittedSearchTermVar } from "../../Apollo/cache";
import { GET_SEARCH_SUGGESTIONS } from "../../Apollo/queries";

//sub-components
import Alert from "../Common/Alert";
import Button from "../Common/Button";
import SearchSuggestions from "./SearchSuggestions";

//icons
import { FaSearch } from "react-icons/fa";

//others
import debounce from "lodash.debounce";
import { SUGGESTIONS_DEBOUNCE_TIME } from "../../constants-and-settings";

/*
Notes:
Explanations for submittedSearchTerm and searchTerm in Apollo/cache to 
*/

const Search = () => {
  //local state variable (apollo)
  const searchTerm = useReactiveVar(searchTermVar);

  const [
    getSearchSuggestions,
    { loading, error, data },
  ] = useLazyQuery(GET_SEARCH_SUGGESTIONS, { fetchPolicy: "no-cache" });

  //custom hook to close the search suggestions menu when the body clicked
  const [
    suggestionsVisible,
    ,
    showSuggestions,
    hideSuggestions,
    searchRef,
  ] = useMenuToggler();

  //a memorized function to debounce the search upon typing
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        if (value) {
          getSearchSuggestions({ variables: { searchValue: value } });
        }
      }, SUGGESTIONS_DEBOUNCE_TIME),
    [getSearchSuggestions]
  );

  //Goal: fetch results when typing
  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch]);

  //the two following functions will set the value of submittedSearchTerm
  const onSuggestionClicked = (suggestion) => {
    submittedSearchTermVar(suggestion);
    hideSuggestions();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    hideSuggestions();
    submittedSearchTermVar(searchTerm);
  };

  if (error) {
    // TODO: make it more useful
    return <Alert message="There was a problem !" type="error" />;
  }

  return (
    <form
      className="flex items-center w-full relative"
      ref={searchRef}
      onSubmit={handleSubmit}
    >
      <input
        onFocus={showSuggestions}
        spellCheck={false}
        className="h-16 w-full bg-transparent text-white border-b-2 border-gray-100  text-lg md:text-xl lg:text-2xl focus:outline-none focus:border-green-swap"
        placeholder="Search for an artist..."
        value={searchTerm}
        onChange={(e) => {
          searchTermVar(e.target.value);
        }}
      />
      <Button className="absolute text-xl right-2 focus-inside" type="text">
        <span className="sr-only">search icon</span>
        <FaSearch />
      </Button>
      {suggestionsVisible && searchTerm && (
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
