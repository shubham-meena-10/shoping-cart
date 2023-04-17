import { useEffect } from "react";
import { FaShoppingBag } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../services/slices/cartSlice";

import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { MdKeyboardBackspace } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <NavBar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty d-flex align-items-center">
            <h2 className="empty-h2">Your cart is currently empty</h2>
            <FaShoppingBag size={170} color="#5A607F" className="mt-5" />
            <div className="start-shopping pt-3">
              <Link to="/" className="link-item">
                <MdKeyboardBackspace size={50} />
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ color: "#5A607F" }}>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems &&
                cart?.cartItems?.map((cartItem) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem?.thumbnail} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem?.title}</h3>
                        <p>{cartItem?.description}</p>
                        <button className="remove-btn" onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem?.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem?.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem?.price * cartItem?.cartQuantity}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary d-flex justify-content-between align-items-start">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <h6 className="taxes">Taxes and shipping calculated at checkout</h6>
                <button className="check-out-btn">Check out</button>
                <div className="continue-shopping">
                  <Link to="/" className="link-item">
                    <MdKeyboardBackspace size={30} />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
