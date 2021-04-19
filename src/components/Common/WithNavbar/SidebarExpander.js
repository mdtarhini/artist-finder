//apollo stuff
import { sidebarExpandedVar } from "../../../Apollo/cache";
import { useReactiveVar } from "@apollo/client";

//sub-components
import Button from "../Button";

//icons
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

const SidebarExpander = () => {
  const sidebarExpanded = useReactiveVar(sidebarExpandedVar);
  return (
    <div>
      <Button
        className="text-xl sm:text-2xl md:hidden"
        onClick={() => sidebarExpandedVar(!sidebarExpandedVar())}
        type="text"
        title={`${sidebarExpanded ? "hide" : "show"} sidebar`}
      >
        {sidebarExpanded ? <AiOutlineCloseCircle /> : <AiOutlineMenuUnfold />}
      </Button>
    </div>
  );
};

export default SidebarExpander;
