import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateQuantity, clearCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const incrementQty = (item) => {
    dispatch(updateQuantity({ id: item.id, qty: (item.qty || 1) + 1 }));
  };

  const decrementQty = (item) => {
    const newQty = (item.qty || 1) - 1;
    if (newQty > 0) {
      dispatch(updateQuantity({ id: item.id, qty: newQty }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * (item.qty || 1), 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">🛒 Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added any books yet.
        </p>
        <Link to="/bookspage">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
            Browse Books
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-white font-bold">Shopping Cart</h2>
        <button
          onClick={handleClearCart}
          className="px-4 py-2 bg-red-500 text-white rounded-lg "
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-28 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <Link to={`/bookspage/${item.id}`}>
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500">by {item.brand}</p>
                <p className="text-lg font-bold text-green-600">${item.price}</p>

                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decrementQty(item)}
                    disabled={item.qty <= 1}
                    className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold">{item.qty || 1}</span>
                  <button
                    onClick={() => incrementQty(item)}
                    className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  ${(item.price * (item.qty || 1)).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-blue-600">${calculateTotal().toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
          <Link to="/bookspage">
            <button className="w-full mt-2 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;