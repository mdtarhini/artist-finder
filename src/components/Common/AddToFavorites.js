import Button from "./Button";
import { useEffect, useRef } from "react";
import { useToast } from "./Toast/useToast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useReactiveVar } from "@apollo/client";
import { favoritesVar } from "../../cache";
import _ from "lodash";
const AddToFavorites = ({ artistMBID, name, type }) => {
  const [RenderToast, showToast] = useToast();

  const favorites = useReactiveVar(favoritesVar);
  const isFavorite = favorites.hasOwnProperty(artistMBID);
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      showToast(true);
    }
  }, [isFavorite, showToast]);

  const toggleFavorite = () => {
    if (isFavorite) {
      favoritesVar(_.omit(favoritesVar(), artistMBID));
    } else {
      favoritesVar({ ...favoritesVar(), [artistMBID]: { name, type } });
    }
  };
  return (
    <>
      <Button
        type="open"
        color="green"
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
