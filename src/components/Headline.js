import logo from "./assets/avataaars.png";
import "./CSS/headline.css";

const Headline = () => {
  return (
    <>
    <br/><br/>
      <div className="logo-img-flex">
        <img
          className="logo-image"
          src={logo}
          alt="cartoon on Jackson Pruett, Full-Stack developer"
        />
      </div>
      <div className="headline-flex">
        <h1 className="name" id="top">
          Jackson Pruett
        </h1>
        <h3 className="headline">Full-Stack Web Developer</h3>
      </div>
    </>
  );
};

export default Headline;
