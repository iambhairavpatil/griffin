import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, toggleCartVisibility } from "../store/slices/cartSlice"; // Action to remove item and toggle visibility

interface CartProps {
  isCartVisible: boolean; // Prop to control visibility
}

const Cart: React.FC<CartProps> = ({ isCartVisible }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id)); // Dispatch action to remove item from cart
  };

  const handleClose = () => {
    dispatch(toggleCartVisibility()); // Close the cart when the close button is clicked
  };

  // Calculate total quantity and total price
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className={`cart-container ${isCartVisible ? 'active' : ''}`}>
      <div className="cart-header">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Your Cart</h4>
          <button onClick={handleClose} className="btn-close" aria-label="Close"></button>
        </div>
        <p>Total items: {totalCount}</p>
        <p>Total price: ₹{totalPrice.toFixed(2)}</p>
      </div>

      {/* List Cart Items */}
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.product.image} // Assuming product has an image property
                alt={item.product.name}
                width="50"
                height="50"
              />
              <div className="item-details">
                <p>{item.product.name}</p>
                <p>Price: ₹{item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <button className="btn btn-primary">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
