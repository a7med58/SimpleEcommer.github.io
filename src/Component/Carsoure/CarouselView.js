import Carousel from "react-bootstrap/Carousel";
import "./Caro.css";
import products from "../../Data/Products";

const CarouselView = () => {
  const carouselView = products.map((item) => {
    return (
      <Carousel.Item>
        <img src={item.imgURL} alt="IMG" />
        <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2> Last Products </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 .col-lg-12">
            <Carousel>{carouselView}</Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselView;
