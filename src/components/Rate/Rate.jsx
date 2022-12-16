import Star from "../../assets/Star.svg";
import FullStar from "../../assets/FullStar.svg";

const rentalRate = ({ rate }) => {
  const rateScale = [1, 2, 3, 4, 5];
  return (
    <div className="rate">
      {rateScale.map((n) =>
        rate >= n ? (
          <img
            key={n.toString()}
            className="star"
            src={FullStar}
            alt="Full star"
          />
        ) : (
          <img
            key={n.toString()}
            className="star"
            src={Star}
            alt="Empty star"
          />
        )
      )}
    </div>
  );
};

export default rentalRate;
