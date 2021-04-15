import { useLazyQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Button from "../Common/Button";
import SearchSuggestions from "./SearchSuggestions";
import { FaSearch } from "react-icons/fa";
import { useMenuToggler } from "../../custom-hooks";

const GET_SEARCH_SUGGESTIONS = gql`
  query GetArtists($searchValue: String!) {
    search {
      artists(query: $searchValue, first: 8) {
        nodes {
          id
          name
        }
      }
    }
  }
`;
const SEARCH_ARTISTS = gql`
  query GetArtists($searchValue: String!) {
    search {
      artists(query: $searchValue, first: 18) {
        nodes {
          id
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [inputValue, setInputValue] = useState({
    changedViaKey: false,
    value: "",
  });
  const [
    suggestionsVisible,
    ,
    showSuggestions,
    hideSuggestions,
    searchRef,
  ] = useMenuToggler();

  const [
    getSearchSuggestions,
    {
      loading: suggestionsLoading,
      error: suggestionsError,
      data: suggestionsData,
    },
  ] = useLazyQuery(GET_SEARCH_SUGGESTIONS);

  const [
    getArtists,
    { loading: artistsLoading, error: artistsError, data: artistsData },
  ] = useLazyQuery(SEARCH_ARTISTS);

  useEffect(() => {
    if (inputValue.value) {
      if (inputValue.changedViaKey) {
        console.log("yes");
        getSearchSuggestions({ variables: { searchValue: inputValue.value } });
      } else {
        getArtists({ variables: { searchValue: inputValue.value } });
      }
    }
  }, [inputValue, getArtists, getSearchSuggestions]);

  const onSuggestionClicked = (searchValue) => {
    setInputValue({ changedViaKey: false, value: searchValue });
    hideSuggestions();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hideSuggestions();
    getArtists({ variables: { searchValue: inputValue.value } });
  };
  if (suggestionsError) return <p>Error :(</p>;

  console.log(artistsData);
  return (
    <form
      className="flex items-center  w-full relative"
      ref={searchRef}
      onSubmit={handleSubmit}
    >
      <input
        onFocus={showSuggestions}
        className="h-16 w-full bg-transparent text-white border-b-2 border-gray-100  text-lg md:text-xl lg:text-2xl focus:outline-none focus:border-green-swap"
        placeholder="Search for an artist..."
        value={inputValue.value}
        onChange={(e) => {
          setInputValue({ changedViaKey: true, value: e.target.value });
        }}
      />
      <Button
        className="absolute text-xl right-2 focus-inside"
        type="text"
        color="green"
        loading={suggestionsLoading}
      >
        <FaSearch />
      </Button>
      {suggestionsVisible && (
        <div className="absolute z-10 top-16 left-0 w-full pt-2">
          <SearchSuggestions
            inputValue={inputValue.value}
            options={suggestionsData?.search?.artists?.nodes}
            onSuggestionClicked={onSuggestionClicked}
          />
        </div>
      )}
    </form>
  );
};
export default Search;
