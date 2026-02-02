import { useNavigate } from 'react-router-dom'

export default function CartModal({ isOpen, cartItems, setCartItems, onClose }) {
  const navigate = useNavigate()

  const removeFromCart = (id, color, size) => {
    setCartItems(cartItems.filter(item => !(item.id === id && item.selectedColor === color && item.selectedSize === size)))
  }

  const updateQuantity = (id, color, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id, color, size)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return sum + (price * item.quantity)
  }, 0)

  const discountPercent = 15
  const subtotal = total
  const freeShippingThreshold = 170
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={onClose}
      />

      {/* Cart Modal - Right Side Sliding Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md md:max-w-lg bg-white z-50 flex flex-col shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-4 flex items-center gap-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="text-3xl hover:opacity-80 transition leading-none"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold flex-1 text-center">MY CART</h1>
          <div className="w-8"></div>
        </div>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600 text-center text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-200 rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight">
                        {item.name}
                      </h3>
                    </div>

                    {/* Quantity Controls and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-md bg-white">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)
                          }
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-lg font-semibold"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 font-semibold text-sm text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)
                          }
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 text-lg font-semibold"
                        >
                          +
                        </button>
                      </div>

                      {/* Price and Delete */}
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <p className="text-xs text-gray-600 mb-1">
                            {item.quantity} × {item.price}
                          </p>
                          <p className="text-sm font-bold text-gray-900">
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.selectedColor, item.selectedSize)
                          }
                          className="text-gray-400 hover:text-red-500 text-sm font-semibold"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section - Sticky Bottom */}
        {cartItems.length > 0 && (
          <div className="bg-white border-t-4 border-gray-300 px-4 py-4 flex-shrink-0">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
              <span className="font-bold text-gray-800">SUBTOTAL:</span>
              <span className="text-lg font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Discount Badge and Free Shipping Message */}
            <div className="mb-3">
              <div className="bg-blue-600 text-white inline-block px-3 py-1 rounded font-bold text-xs mb-2">
                {discountPercent}%
              </div>
              {remainingForFreeShipping > 0 ? (
                <p className="text-xs text-gray-700 leading-snug">
                  Spend <span className="font-bold">${remainingForFreeShipping.toFixed(2)}</span> to get <span className="font-bold">free shipping</span>
                </p>
              ) : (
                <p className="text-xs text-green-600 font-semibold">
                  ✓ You qualify for free shipping!
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  navigate('/cart')
                  onClose()
                }}
                className="w-full bg-blue-600 text-white font-bold py-2.5 rounded hover:bg-blue-700 transition text-base"
              >
                VIEW CART
              </button>
              <button className="w-full bg-orange-500 text-white font-bold py-2.5 rounded hover:bg-orange-600 transition text-base">
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
