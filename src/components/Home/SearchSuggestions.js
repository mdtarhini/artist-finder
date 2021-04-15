const SearchSuggestions = ({ inputValue, options, onSuggestionClicked }) => {
  if (!inputValue) {
    return null;
  }

  const RenderSuggstions = () => {
    return (
      <ul>
        {options.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                onSuggestionClicked(item.name);
              }}
              className={`cursor-pointer hover:bg-gray-500 
            ${
              index === 0
                ? "rounded-t-2xl"
                : index === options.length - 1
                ? "rounded-b-2xl"
                : "rounded-none"
            }`}
            >
              <div className="p-3 w-full">{item.name}</div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="w-full max-h-96 overflow-auto rounded-2xl bg-gray-700">
      {options ? RenderSuggstions() : <div className="h-20"></div>}
    </div>
  );
};

export default SearchSuggestions;
