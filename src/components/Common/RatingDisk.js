/*
Not quite possible with tailwind alone, we need to use an SVG
We will draw two stroke circles of the same radius. The first one is a full circle whereas the second is sliced according to the percentage
*/

const RatingDisk = ({ rating }) => {
  const percentage = Math.floor(100 * (rating[0] / rating[1]));
  const strokeDashArray = `${percentage} ${100 - percentage}`;
  let color;
  if (percentage > 70) {
    color = "#00cc88ff";
  } else if (percentage > 50) {
    color = "#F4B400";
  } else {
    color = "#DB4437";
  }
  return (
    <div className="w-12 h-12 flex justify-center items-center">
      <svg width="100%" height="100%" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="15.91549430918954" fill="#000"></circle>
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d2d3d4"
          strokeWidth="3"
        ></circle>

        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={strokeDashArray}
          strokeDashoffset="25"
        ></circle>
      </svg>
      <span className="absolute">{rating[0]}</span>
    </div>
  );
};
export default RatingDisk;
