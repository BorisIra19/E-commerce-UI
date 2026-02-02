import { useNavigate } from 'react-router-dom'
import hoodyImage from '../assets/hoody.jpg'
import navyShirtImage from '../assets/navy-shirt.jpg'
import blueJacketImage from '../assets/blue-jacket.jpg'
import stripedShirtImage from '../assets/striped-shirt.jpg'
import walletImage from '../assets/wallet.jpg'
import tshirtImage from '../assets/tshirt.jpg'
import shirtImage from '../assets/shirt.jpg'
import jeansImage from '../assets/jeans.jpg'
import dressImage from '../assets/dress.jpg'
import skirtImage from '../assets/skirt.jpg'
import blouseImage from '../assets/blouse.jpg'
import watchImage from '../assets/watch.jpg'
import shoesImage from '../assets/shoes.jpg'

export default function ProductGrid({ onAddToCart, onAddToWishlist, wishlistItems = [] }) {
  const navigate = useNavigate()

  const products = [
    { id: 1, name: 'Men Hooded Navy Blue', price: '$70.00-$95.00', badge: 'FEATURED', badgeColor: 'bg-yellow-400', image: hoodyImage },
    { id: 2, name: 'Men Navy & Red Check Shirt', price: '$99.00-$124.00', badge: '20% OFF', badgeColor: 'bg-green-500', image: navyShirtImage },
    { id: 3, name: 'Light Blue Jacket', price: '$89.00-$96.00', badge: '7% OFF', badgeColor: 'bg-green-500', image: blueJacketImage },
    { id: 4, name: 'Striped Casual Shirt', price: '$120.00', badge: 'FEATURED', badgeColor: 'bg-yellow-400', image: stripedShirtImage },
    { id: 5, name: 'Premium Leather Wallet', price: '$35.00', badge: 'SALE', badgeColor: 'bg-red-500', image: walletImage },
    { id: 6, name: 'Classic Cotton T-Shirt', price: '$15.00', badge: '40% OFF', badgeColor: 'bg-green-500', image: tshirtImage },
    { id: 7, name: 'Formal Office Shirt', price: '$45.00', badge: '', badgeColor: '', image: shirtImage },
    { id: 8, name: 'Blue Skinny Jeans', price: '$55.00', badge: '31% OFF', badgeColor: 'bg-green-500', image: jeansImage },
    { id: 9, name: 'Women Casual Dress', price: '$60.00', badge: 'FEATURED', badgeColor: 'bg-yellow-400', image: dressImage },
    { id: 10, name: 'Women Mini Skirt', price: '$40.00', badge: '', badgeColor: '', image: skirtImage },
    { id: 11, name: 'Women Casual Blouse', price: '$35.00', badge: '36% OFF', badgeColor: 'bg-green-500', image: blouseImage },
    { id: 12, name: 'Designer Wrist Watch', price: '$49.00', badge: '42% OFF', badgeColor: 'bg-green-500', image: watchImage },
    { id: 13, name: 'Premium Casual Shoes', price: '$65.00', badge: '27% OFF', badgeColor: 'bg-green-500', image: shoesImage },
    { id: 15, name: 'Casual Hoodie - Slate', price: '$72.00', badge: '', badgeColor: '', image: hoodyImage },
    { id: 16, name: 'Lightweight Jacket', price: '$95.00', badge: 'NEW', badgeColor: 'bg-blue-500', image: blueJacketImage },
    { id: 17, name: 'Striped Tee', price: '$25.00', badge: 'SALE', badgeColor: 'bg-red-500', image: stripedShirtImage },
    { id: 18, name: 'Everyday Tee', price: '$18.00', badge: '', badgeColor: '', image: tshirtImage },
    { id: 19, name: 'Relaxed Fit Jeans', price: '$60.00', badge: '', badgeColor: '', image: jeansImage }
  ]

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
            {/* Product Image - Clickable */}
            <div 
              onClick={() => navigate(`/product/${product.id}`)}
              className="relative h-56 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden group hover:opacity-90 transition"
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-4 py-1 text-xs font-bold rounded-sm z-10`}>
                  {product.badge}
                </div>
              )}
              {/* Wishlist Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToWishlist(product)
                }}
                className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition z-10 font-bold text-xl ${
                  wishlistItems.some(item => item.id === product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white/80 text-gray-700 hover:bg-white'
                }`}
              >
                {wishlistItems.some(item => item.id === product.id) ? 'X' : '♥'}
              </button>
            {/* Image Placeholder */}
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-400 font-semibold text-sm md:text-base">
                  [Product Image]
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 md:p-5">
              <h3 
                onClick={() => navigate(`/product/${product.id}`)}
                className="text-xs md:text-sm font-semibold text-gray-800 mb-3 line-clamp-2 h-10 hover:text-blue-500 transition cursor-pointer"
              >
                {product.name}
              </h3>
              
              {/* Price */}
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <span className="text-base md:text-lg font-bold text-gray-900">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-full bg-black text-white py-2 md:py-2.5 rounded-md hover:bg-gray-800 transition font-semibold text-xs md:text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
