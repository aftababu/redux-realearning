import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, getCartSelector } from "../../redux/reducer/cartReducer";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector(getCartSelector);
  // console.log(useSelector(getCartSelector));
  return (
    <div>
      <h5>{product.name}</h5>
      <button
        onClick={() =>
          dispatch(addItems({ id: items.length + 1, name: product.name }))
        }
      >
        add to cart
      </button>
      {/* <button>add to cart</button> */}
    </div>
  );
};

export default Product;
