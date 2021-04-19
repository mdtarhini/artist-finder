//apollo stuff
import { sidebarExpandedVar } from "../../../Apollo/cache";
import { useReactiveVar } from "@apollo/client";

//sub-components
import Button from "../Button";

//icons
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

const SidebarExpander = () => {
  const handleClick = () => {
    sidebarExpandedVar(!sidebarExpandedVar());
  };
  const sidebarExpanded = useReactiveVar(sidebarExpandedVar);
  return (
    <div>
      <Button
        className="text-2xl md:hidden"
        onClick={handleClick}
        type="text"
        title={`${sidebarExpanded ? "hide" : "show"} sidebar`}
      >
        {sidebarExpanded ? <AiOutlineCloseCircle /> : <AiOutlineMenuUnfold />}
      </Button>
    </div>
  );
};

export default SidebarExpander;
