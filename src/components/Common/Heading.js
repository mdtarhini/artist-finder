const classNamesPerLevel = {
  1: "text-2xl  lg:text-3xl font-bold text-green-swap",
  2: "text-xl lg:text-2xl font-semibold",
  3: "text-lg lg:text-xl font-semibold",
  4: "text-lg font-semibold",
  5: "text-base font-semibold",
  6: "text-base font-semibold",
};

const Heading = ({ level, text, className }) => {
  let compClassName = `${className} ${classNamesPerLevel[level]}`;

  switch (level) {
    case 1:
      return <h1 className={compClassName}>{text}</h1>;
    case 2:
      return <h2 className={compClassName}>{text}</h2>;
    case 3:
      return <h3 className={compClassName}>{text}</h3>;
    case 4:
      return <h4 className={compClassName}>{text}</h4>;
    case 5:
      return <h5 className={compClassName}>{text}</h5>;
    case 6:
    default:
      return <h6 className={compClassName}>{text}</h6>;
  }
};

export default Heading;
