import Carousel from "react-bootstrap/Carousel";
import products from "../../Data/Products";
import "./Caro.css";

const CarouselView = () => {
  // Sort products by date added, assuming there is a 'dateAdded' field in each product object
  const sortedProducts = products.sort(
    (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
  );

  // Only display the last 5 products
  const lastProducts = sortedProducts.slice(0, 5);

  const carouselView = lastProducts.map((item) => {
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
