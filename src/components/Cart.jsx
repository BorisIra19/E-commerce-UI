import { useNavigate } from 'react-router-dom'

export default function Cart({ cartItems, setCartItems }) {
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

  const shipping = 5.0
  const finalTotal = total + shipping
  const progressPercent = (total / 150) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-12 py-6">
        <div className="flex items-center justify-center gap-4 text-gray-600 md:text-xl font-semibold">
          <span className={total > 0 ? 'text-blue-600' : 'text-gray-400'}>Shopping Cart</span>
          <span>&gt;</span>
          <span className="text-gray-400">Checkout</span>
          <span>&gt;</span>
          <span className="text-gray-400">Order Complete</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <div className="text-8xl mb-6 text-gray-400">
              <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <p className="text-gray-800 text-2xl font-bold mb-6">SHOPPING CART IS EMPTY!</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 font-semibold"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Cart Area */}
          <div className="lg:col-span-2">
            {/* Cart Table Header - Desktop Only */}
            <div className="hidden md:grid md:grid-cols-5 gap-4 mb-6 pb-4 border-b-2 border-blue-600 font-bold text-gray-800">
              <div className="col-span-1">PRODUCT</div>
              <div className="col-span-1 text-center">PRICE</div>
              <div className="col-span-1 text-center">QUANTITY</div>
              <div className="col-span-1 text-right">SUBTOTAL</div>
              <div></div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded hidden md:grid md:grid-cols-5 gap-4 items-center border border-gray-200"
                >
                  {/* Product */}
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-600">
                        {item.selectedColor && `Color: ${item.selectedColor}`}
                        {item.selectedColor && item.selectedSize && ' • '}
                        {item.selectedSize && `Size: ${item.selectedSize}`}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center font-semibold text-blue-600">{item.price}</div>

                  {/* Quantity */}
                  <div className="flex items-center justify-center border border-gray-300 rounded w-fit mx-auto">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)
                      }
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)
                      }
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right font-bold text-gray-900">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.selectedColor, item.selectedSize)
                    }
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    🗑
                  </button>
                </div>
              ))}

              {/* Mobile View */}
              <div className="md:hidden space-y-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex gap-4 mb-4">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-600 mb-2">
                          {item.selectedColor && `Color: ${item.selectedColor}`}
                          {item.selectedColor && item.selectedSize && ' • '}
                          {item.selectedSize && `Size: ${item.selectedSize}`}
                        </p>
                        <p className="text-sm font-bold text-blue-600">{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)
                          }
                          className="px-2 py-1 text-gray-600"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)
                          }
                          className="px-2 py-1 text-gray-600"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold text-gray-900">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.selectedColor, item.selectedSize)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 pb-8 border-b border-gray-200">
              <input
                type="text"
                placeholder="Coupon code"
                className="flex-1 px-4 py-3 border border-gray-300 rounded outline-none"
              />
              <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded hover:bg-blue-700 transition">
                APPLY COUPON
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-6">CART TOTALS</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-bold text-blue-600">Flat rate: ${shipping.toFixed(2)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mb-2">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${Math.min(progressPercent, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">Spend $102.00 to get free shipping</p>
              </div>

              {/* Total */}
              <div className="flex justify-between text-xl font-bold text-gray-900 mb-6 pb-6 border-b border-gray-200">
                <span>Total</span>
                <span className="text-blue-600">${finalTotal.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600 transition text-lg"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
