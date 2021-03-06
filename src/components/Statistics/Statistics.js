import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const sum = total(good, neutral, bad);

  return (
    <div className={s.container}>
      <p className={s.text}>Good : {good}</p>
      <p className={s.text}>Neutral : {neutral}</p>
      <p className={s.text}>Bad : {bad}</p>

      <p className={s.text}>Total : {sum}</p>
      <p className={s.text}>
        Positive feedback: {positivePercentage(sum, good)}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
export default Statistics;
