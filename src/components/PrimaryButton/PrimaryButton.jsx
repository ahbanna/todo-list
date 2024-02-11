import "./PrimaryButton.css";
import { Link } from "react-router-dom";
const PrimaryButton = ({ buttonText, to, target }) => {
  return (
    <div className="primary-btn">
      <Link to={to} target={target}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
