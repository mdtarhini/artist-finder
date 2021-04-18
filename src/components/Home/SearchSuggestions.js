import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SearchSuggestions = ({ options, onSuggestionClicked, loading }) => {
  const RenderSuggstions = () => {
    return (
      <ul>
        {options.map((item, index) => {
          return (
            <li
              key={item.mbid}
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
    <div className="w-full max-h-96 overflow-auto rounded-2xl bg-gray-700 shadow-md">
      {options ? (
        RenderSuggstions()
      ) : (
        <div className="h-20 flex items-center justify-center">
          {loading && (
            <AiOutlineLoading3Quarters className="text-green-swap animate-spin text-xl" />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
