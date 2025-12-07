import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, calculateTotal } = useCart();

  return (
    <div className="cartPage">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <h2>Your cart is empty</h2>
          <p>Start adding some books to your collection!</p>
        </div>
      ) : (
        <div className="cartContent">
          <div className="cartItems">
            {cartItems.map((item) => (
              <div className="cartItem" key={item.id}>
                <img src={item.image || "/placeholder.svg"} alt={item.title} />
                <div className="itemDetails">
                  <h3>{item.title}</h3>
                  <p className="itemAuthor">{item.author}</p>
                  <p className="itemPrice">${item.price.toFixed(2)}</p>
                </div>
                <div className="quantityControls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="itemTotal">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="removeButton" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cartSummary">
            <h2>Order Summary</h2>
            <div className="summaryRow">
              <span>Subtotal:</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="summaryRow">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summaryRow total">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="checkoutButton">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
