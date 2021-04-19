//icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

//define default classnames for the different types. The className props will be used in addition
const classNamePerType = {
  primary: "rounded-md bg-green-swap text-white p-2 border-2 border-green-600",
  text: "text-white p-2 ",
  open: "p-2 rounded-md border-2 border-green-swap text-green-swap",
  none: "",
};

const transitionClassNamePerType = {
  primary:
    "transition duration-300 ease-in-out transform hover:bg-text-green-600",
  text: "transition duration-300 ease-in-out hover:text-green-swap",
  open:
    "transition duration-300 ease-in-out hover:bg-green-swap hover:text-white",
  none: "transition duration-300 ease-in-out hover:opacity-70",
};

const commonClassName =
  "flex items-center space-x-1 justify-center focus-outside";

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  loading = false,
  title = "",
  type = "primary",
}) => {
  // Compose a classname using the props + the default ones depending on the type
  let compClassName = `${commonClassName} ${
    classNamePerType[type]
  } ${className} ${
    disabled ? "cursor-not-allowed" : transitionClassNamePerType[type]
  }`;
  return (
    <button
      className={compClassName}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
    >
      {loading && <AiOutlineLoading3Quarters className="animate-spin mr-1" />}
      {children}
    </button>
  );
};
export default Button;
