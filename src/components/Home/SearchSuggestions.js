//icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SearchSuggestions = ({ options, onSuggestionClicked, loading }) => {
  const RenderSuggestions = () => {
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
        RenderSuggestions()
      ) : (
        <div className="h-20 flex items-center justify-center">
          {loading && (
            <AiOutlineLoading3Quarters className="animate-spin text-xl text-green-swap" />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
