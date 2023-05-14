import React from "react";
// import { removeFromCart } from "../../redux/action/cartAction";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getCartSelector,
  getItemsSelector,
  removeItems,
} from "../../redux/reducer/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCartSelector);
  console.log(cart);
  // console.log(props);
  return (
    <div>
      <h4>this is cart</h4>
      <ul>
        {cart.map((pd) => (
          <>
            <li key={pd.id}>{pd.name}</li>
            <button onClick={() => dispatch(removeItems({ id: pd.id }))}>
              x
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   };
// };
// const mapDispatchToProps = {
//   removeFromCart: removeFromCart,
// };

export default Cart; //connect(mapStateToProps, mapDispatchToProps);
