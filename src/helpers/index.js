export const formatSeconds = (seconds, withHours = false) => {
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const formatted = [];
  if (withHours) {
    formatted.push(seconds / 3600);
  }
  formatted.push(withHours ? (seconds % 3600) / 60 : seconds / 60);
  formatted.push(seconds % 60);

  return formatted.map(format).join(":");
};

export const isObject = (obj) => {
  return typeof obj === "object" && obj !== null;
};

//it does not support all the possibilities (just for me :p)
export const removeDuplicates = (array, key = null) => {
  //object case
  if (isObject(array[0])) {
    if (!array[0].hasOwnProperty(key)) {
      return array;
    }
    return array.filter(
      (item, index) =>
        array.findIndex((jtem) => jtem[key] === item[key]) === index
    );
  }
  //non objects
  return [...new Set(array)];
};
