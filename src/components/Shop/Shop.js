import React from "react";
import Product from "../Product/Product";
// import { ADD_TO_CART, addToCart } from "../../redux/action/cartAction";
import { connect, useSelector } from "react-redux";
import { getProductSelector } from "../../redux/reducer/cartReducer";

const Shop = (props) => {
  // console.log(props);
  // const { products, addToCart } = props;
  const products = useSelector(getProductSelector);
  console.log(products);
  return (
    <div>
      <h2>this is shop</h2>
      {products.map((pd) => (
        <Product product={pd} key={pd.id} />
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     products: state?.products,
//   };
// };
// const mapDispatchToProps = {
//   addToCart: addToCart,
// };
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop);

// export default Shop;
export default Shop; //connect(mapStateToProps, mapDispatchToProps);
