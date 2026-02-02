import { useNavigate } from 'react-router-dom'

export default function Wishlist({ wishlistItems = [], onRemoveFromWishlist = () => {} }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-blue-600 text-white px-4 py-4 flex items-center gap-4 md:hidden sticky top-0 z-50">
        <button
          onClick={() => navigate('/')}
          className="text-2xl hover:opacity-80"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold flex-1 text-center">MY WISHLIST</h1>
        <div className="w-8"></div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-white border-b border-gray-200 px-12 py-6">
        <h1 className="text-3xl font-bold text-gray-800">MY WISHLIST</h1>
      </div>

      {/* Content */}
      <div className="px-4 md:px-12 py-8">
        {wishlistItems.length === 0 ? (
          <div className="flex items-center justify-center px-4 py-20">
            <div className="text-center">
              <div className="text-8xl mb-6 text-gray-400">
                <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-gray-800 text-2xl font-bold mb-6">WISHLIST IS EMPTY!</p>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 font-semibold"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">{wishlistItems.length} item(s) saved</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48 md:h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-gray-400">[Product Image]</div>
                    )}
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold transition"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
