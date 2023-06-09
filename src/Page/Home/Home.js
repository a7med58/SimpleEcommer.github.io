import { faHandsBound } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import himage from "../../Assets/Header-Logo.png";
import CarouselView from "../../Component/Carsoure/CarouselView";
import "./Home.css";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const message = "Brandnera We are in your hands";
  const handleMouseOver = () => {
    setShowMessage(true);
  };
  const handleMouseOut = () => {
    setShowMessage(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h2> Brandnera Store</h2>
              <h5>Welcome In Brandnera Store For Egyption Products</h5>
              <FontAwesomeIcon
                icon={faHandsBound}
                className="svg-home"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              {showMessage && <span className="pop-mssg">{message}</span>}
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="header-box">
                <img src={himage} alt="background" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <CarouselView />
    </>
  );
};

export default Home;
