import { Container } from "react-bootstrap";
import "./Banner.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import bannerImg from "../../../assets/images/banner/banner-person.png";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <div className="banner-text">
          <h1 className="banner-title">
            Optimize Your Workflow
            <span>Efficiently.</span>
          </h1>
          <h3 className="banner-subtitle">
            Effortlessly Plan, Track, and Organize Your Tasks
          </h3>
          <p>
            An Intranet platform to Manage projects, organise work and focus on
            what’s important.
          </p>
          <div className="banner-btn">
            <PrimaryButton buttonText="Read More" to="/about"></PrimaryButton>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" srcset="" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
