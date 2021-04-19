//react
import { useEffect, useRef } from "react";

//custom hooks
import { useToast } from "./Toast/useToast";

//apollo stuff
import { useReactiveVar } from "@apollo/client";
import { favoritesVar } from "../../Apollo/cache";

//sub-components
import Button from "./Button";

//icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//others
import _ from "lodash";

const AddToFavorites = ({ artistMBID, name, type }) => {
  const [RenderToast, showToast] = useToast();

  const favorites = useReactiveVar(favoritesVar);
  const isFavorite = favorites.hasOwnProperty(artistMBID);

  const mounted = useRef();

  //Goal: Show a toast when an artist is added/removed from the favorites
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      showToast(true);
    }
  }, [isFavorite, showToast]);

  const toggleFavorite = () => {
    const updatedFavorites = isFavorite
      ? _.omit(favoritesVar(), artistMBID)
      : { ...favoritesVar(), [artistMBID]: { name, type } };

    favoritesVar(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Button
        type="open"
        className={`w-10 h-10 rounded-full text-xl ${
          isFavorite ? "bg-green-swap" : ""
        }`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite();
        }}
      >
        {isFavorite ? (
          <AiFillHeart className="text-white" />
        ) : (
          <AiOutlineHeart />
        )}
      </Button>
      <RenderToast
        type="success"
        message={`${name} ${
          isFavorite ? "added to" : "removed from"
        } favorites`}
      />
    </>
  );
};
export default AddToFavorites;

/*
Notes:
-The <> empty tag is a shorthand for a react fragment to group the list and the button.
-in the button,  e.preventDefault() is called so when it is present inside a link card the click does not propagate to the link
*/
