import { useParams } from "react-router-dom";
import ProductsData from "../../Data/Products";
import FormatCurr from "../Store/FormatCurr";

import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="box-cart-detal">
      <h2>{product.name}</h2>
      <div className="box-cart-detal-all">
        <img src={product.imgURL} alt={product.name} />
        <div className="box-cart-detal-all2">
          <div>
            <p className="lab">Spexs:</p>
            <p>{product.description}</p>
          </div>
          <div>
            <p className="lab">Price:</p>
            <p>{FormatCurr(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
