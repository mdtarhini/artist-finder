import Button from "../Common/Button";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const AddToFavorites = ({ isFavorite }) => {
  return (
    <Button
      type="open"
      color="green"
      className="w-10 h-10 rounded-full text-xl"
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
    </Button>
  );
};
export default AddToFavorites;
