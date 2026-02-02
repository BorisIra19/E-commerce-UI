import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CategoryBrowser from './CategoryBrowser'
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



const allProducts = [
  { id: 1, name: 'Men Hooded Navy Blue', fullName: 'Men Hooded Navy Blue Jacket', price: '$70.00', oldPrice: '$95.00', badge: 'FEATURED', badgeColor: 'bg-yellow-400', image: hoodyImage, description: 'No cost EMI', colors: ['blue','gray','red'], sizes: ['S','M','L','XL'], highlights: ['Regular Fit','Full sleeves','Machine wash'], services: ['30 Day Return Policy','Free Delivery'] },
  { id: 2, name: 'Men Navy & Red Check Shirt', fullName: 'Men Navy & Red Check Formal Shirt', price: '$99.00', oldPrice: '$124.00', badge: '20% OFF', badgeColor: 'bg-green-500', image: navyShirtImage, description: 'Premium quality formal wear', colors: ['navy','gray','black'], sizes: ['S','M','L','XL','XXL'], highlights: ['Slim Fit','Premium cotton'], services: ['30 Day Return Policy'] },
  { id: 3, name: 'Light Blue Jacket', fullName: 'Light Blue Solid Jacket', price: '$89.00', oldPrice: '$96.00', badge: '7% OFF', badgeColor: 'bg-green-500', image: blueJacketImage, description: 'Comfortable and stylish', colors: ['lightblue','darkblue'], sizes: ['M','L','XL'], highlights: ['Stylish design'], services: ['Free Delivery'] },
  { id: 4, name: 'Striped Casual Shirt', fullName: 'Striped Casual Shirt', price: '$120.00', oldPrice: '', badge: 'FEATURED', badgeColor: 'bg-yellow-400', image: stripedShirtImage, description: 'Modern striped design', colors: ['blue','white'], sizes: ['S','M','L'], highlights: ['Striped pattern'], services: ['30 Day Return Policy'] },
  { id: 5, name: 'Premium Leather Wallet', fullName: 'Premium Genuine Leather Wallet', price: '$35.00', oldPrice: '$50.00', badge: 'SALE', badgeColor: 'bg-red-500', image: walletImage, description: 'Genuine leather', colors: ['black','brown'], sizes: ['One Size'], highlights: ['RFID protection'], services: ['30 Day Return Policy'] },
  { id: 6, name: 'Classic Cotton T-Shirt', fullName: 'Classic Cotton T-Shirt', price: '$15.00', oldPrice: '$25.00', badge: '40% OFF', badgeColor: 'bg-green-500', image: tshirtImage, description: 'Comfortable everyday classic', colors: ['white','black'], sizes: ['S','M','L'], highlights: ['Breathable'], services: ['Free Delivery'] },
  { id: 7, name: 'Formal Office Shirt', fullName: 'Formal Office Shirt', price: '$45.00', oldPrice: '$65.00', badge: '', badgeColor: '', image: shirtImage, description: 'Professional formal wear', colors: ['white','light-blue'], sizes: ['S','M','L','XL'], highlights: ['Wrinkle resistant'], services: ['30 Day Return Policy'] },
  { id: 8, name: 'Blue Skinny Jeans', fullName: 'Blue Skinny Jeans', price: '$55.00', oldPrice: '$80.00', badge: '31% OFF', badgeColor: 'bg-green-500', image: jeansImage, description: 'Modern skinny fit denim', colors: ['light-blue','dark-blue'], sizes: ['28','30','32','34'], highlights: ['Stretch denim'], services: ['Free Delivery'] },
  { id: 9, name: 'Women Casual Dress', fullName: 'Women Casual Dress', price: '$60.00', oldPrice: '$85.00', badge: 'FEATURED', badgeColor: 'bg-yellow-400', image: dressImage, description: 'Elegant and comfortable', colors: ['red','blue'], sizes: ['S','M','L'], highlights: ['Midi length'], services: ['30 Day Return Policy'] },
  { id: 10, name: 'Women Mini Skirt', fullName: 'Women Mini Skirt', price: '$40.00', oldPrice: '$60.00', badge: '', badgeColor: '', image: skirtImage, description: 'Stylish and trendy', colors: ['black','navy'], sizes: ['S','M','L'], highlights: ['Stretch waistband'], services: ['Free Delivery'] },
  { id: 11, name: 'Women Casual Blouse', fullName: 'Women Casual Blouse', price: '$35.00', oldPrice: '$55.00', badge: '36% OFF', badgeColor: 'bg-green-500', image: blouseImage, description: 'Comfortable and fashionable', colors: ['floral','white'], sizes: ['S','M','L'], highlights: ['Breathable cotton blend'], services: ['30 Day Return Policy'] },
  { id: 12, name: 'Designer Wrist Watch', fullName: 'Designer Wrist Watch', price: '$49.00', oldPrice: '$85.00', badge: '42% OFF', badgeColor: 'bg-green-500', image: watchImage, description: 'Premium chronograph watch', colors: ['blue','silver'], sizes: ['One Size'], highlights: ['Quartz movement'], services: ['Free Delivery'] },
  { id: 13, name: 'Premium Casual Shoes', fullName: 'Premium Casual Shoes', price: '$65.00', oldPrice: '$89.00', badge: '27% OFF', badgeColor: 'bg-green-500', image: shoesImage, description: 'Comfortable everyday shoes', colors: ['black','white'], sizes: ['6','7','8','9'], highlights: ['Rubber sole'], services: ['30 Day Return Policy'] },
  { id: 14, name: 'Casual Hoodie - Slate', fullName: 'Casual Hoodie - Slate', price: '$72.00', oldPrice: '', badge: '', badgeColor: '', image: hoodyImage, description: 'Cozy hoodie', colors: ['slate','navy'], sizes: ['S','M','L'], highlights: ['Soft fabric'], services: ['Free Delivery'] },
  { id: 15, name: 'Lightweight Jacket', fullName: 'Lightweight Jacket', price: '$95.00', oldPrice: '', badge: 'NEW', badgeColor: 'bg-blue-500', image: blueJacketImage, description: 'Lightweight and water resistant', colors: ['blue','black'], sizes: ['M','L','XL'], highlights: ['Windproof'], services: ['Free Delivery'] },
  { id: 16, name: 'Striped Tee', fullName: 'Striped Tee', price: '$25.00', oldPrice: '', badge: 'SALE', badgeColor: 'bg-red-500', image: stripedShirtImage, description: 'Casual striped tee', colors: ['blue','white'], sizes: ['S','M','L'], highlights: ['Soft cotton'], services: ['30 Day Return Policy'] },
  { id: 17, name: 'Everyday Tee', fullName: 'Everyday Tee', price: '$18.00', oldPrice: '', badge: '', badgeColor: '', image: tshirtImage, description: 'Everyday essential tee', colors: ['white','black'], sizes: ['S','M','L'], highlights: ['Breathable'], services: ['Free Delivery'] },
  { id: 18, name: 'Relaxed Fit Jeans', fullName: 'Relaxed Fit Jeans', price: '$60.00', oldPrice: '', badge: '', badgeColor: '', image: jeansImage, description: 'Relaxed comfortable jeans', colors: ['blue','dark-blue'], sizes: ['30','32','34'], highlights: ['Comfort fit'], services: ['30 Day Return Policy'] },
  { id: 19, name: 'Accessory Wallet', fullName: 'Accessory Wallet', price: '$30.00', oldPrice: '', badge: '', badgeColor: '', image: walletImage, description: 'Compact accessory wallet', colors: ['brown','black'], sizes: ['One Size'], highlights: ['Slim profile'], services: ['Free Delivery'] }
]


export default function ProductDetail({ onAddToCart, onAddToWishlist, wishlistItems = [] }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = allProducts.find(p => p.id === parseInt(id))

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || 'blue')
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || 'M')
  const [quantity, setQuantity] = useState(1)
  const [timeLeft, setTimeLeft] = useState({ days: 302, hours: 10, minutes: 12, seconds: 0 })
  const [viewerCount, setViewerCount] = useState(21)
  
  const isInWishlist = wishlistItems.some(item => item.id === product?.id)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 23
              days--
            }
          }
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Back to Shopping
          </button>
        </div>
      </div>
    )
  }

  const colorMap = {
    blue: '#3B82F6',
    gray: '#9CA3AF',
    red: '#EF4444',
    navy: '#000080',
    black: '#000000',
    white: '#FFFFFF',
    khaki: '#F3E5AB',
    lightblue: '#87CEEB',
    darkblue: '#00008B',
    brown: '#8B4513',
    tan: '#D2B48C',
    'light-blue': '#ADD8E6',
    pink: '#FFC0CB'
  }

  const discountPercent = product.oldPrice 
    ? Math.round(((parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.oldPrice.replace('$', ''))) * 100)
    : 0

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor,
      selectedSize,
      quantity
    })
  }

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Product Image and Thumbnails */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden aspect-square mb-4">
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 text-sm font-bold rounded z-10`}>
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails removed - only main image shown */}
              {/* Discount Badge */}
              {discountPercent > 0 && (
                <div className="mt-4 bg-green-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-center font-bold relative -left-12">
                  <div>
                    <div className="text-2xl">${Math.round(parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', '')))}</div>
                    <div className="text-xs">OFF</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Middle & Right Column - Product Details */}
          <div className="lg:col-span-3">
            {/* Countdown Timer */}
            <div className="mb-6 flex gap-8 text-center">
              <div>
                <div className="text-blue-600 font-bold text-2xl">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-gray-600 text-xs font-semibold">Days</div>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-2xl">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-gray-600 text-xs font-semibold">Hrs</div>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-gray-600 text-xs font-semibold">Mins</div>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-gray-600 text-xs font-semibold">Secs</div>
              </div>
            </div>

            {/* Product Title and Price */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {product.fullName}
              </h1>
              
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">{product.oldPrice}</span>
                    <span className="text-lg font-bold text-green-600">{discountPercent}% Off</span>
                  </>
                )}
                <span className="text-gray-600 text-sm">!</span>
              </div>
              <div className="text-green-600 font-semibold text-sm">In Stock</div>
            </div>

            {/* Offers Section */}
            <div className="mb-6 pb-6 border-b border-gray-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">🏷️</span>
                <div>
                  <p className="font-semibold text-gray-800">Bank Offer <a href="#" className="text-blue-600 text-sm hover:underline ml-2">T & C</a></p>
                  <p className="text-sm text-gray-600">10% instant discount on VISA Cards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">🏷️</span>
                <div>
                  <p className="font-semibold text-gray-800">Special Price <a href="#" className="text-blue-600 text-sm hover:underline ml-2">T & C</a></p>
                  <p className="text-sm text-gray-600">Get extra 20% off (price inclusive of discount)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">🏷️</span>
                <div>
                  <p className="font-semibold text-gray-800">No cost EMI $9/month. Standard EMI also available <a href="#" className="text-blue-600 text-sm hover:underline ml-2">View Plans</a></p>
                </div>
              </div>
            </div>

            {/* Product Brand/Category Section */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded font-bold">W</div>
                <div>
                  <p className="font-bold text-lg">WATCH</p>
                  <p className="text-gray-600 text-sm">WATCH TAGLINE</p>
                </div>
              </div>
            </div>

            {/* Services and Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-200">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Services:</h3>
                <ul className="space-y-2">
                  {product.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">•</span> {service}
                      <a href="#" className="text-blue-600 hover:underline ml-1">?</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Highlights:</h3>
                <ul className="space-y-2">
                  {product.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">•</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Color and Size Selection */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Color</h3>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition ${
                        selectedColor === color
                          ? 'border-blue-600 scale-110'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: colorMap[color] }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Size</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded font-semibold transition ${
                        selectedSize === size
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

              {/* Quantity */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-lg font-semibold"
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-lg font-semibold"
                >
                  +
                </button>
              </div>

              {/* Action Button: keep Add to Cart only */}
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-600 transition text-base"
              >
                ADD TO CART
              </button>
            </div>

            {/* Additional Options */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
              <button 
                onClick={() => onAddToWishlist(product)}
                className={`flex items-center justify-center gap-2 py-3 border-2 rounded transition font-semibold ${
                  isInWishlist 
                    ? 'border-red-500 bg-red-50 text-red-600' 
                    : 'border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{isInWishlist ? '❤️' : '♡'}</span>
                <span>{isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded hover:bg-gray-50 transition">
                <span className="text-xl">⇄</span>
                <span className="font-semibold text-gray-800">Compare</span>
              </button>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-semibold text-gray-800">Delivery & Return</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">?</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">❓</span>
                <div>
                  <p className="font-semibold text-gray-800">Ask a Question</p>
                </div>
              </div>
            </div>

            {/* Delivery Date and Viewers */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4 text-gray-700 mb-3">
                <div>
                  <span className="text-sm font-semibold">Estimated Delivery:</span>
                  <span className="text-sm ml-2">04 February - 08 February</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-lg">👁️</span>
                <span className="text-sm"><span className="font-bold">{viewerCount}</span> People viewing this product right now!</span>
              </div>
            </div>

            {/* Safe Checkout Section */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Guaranteed Safe Checkout</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center justify-center w-16 h-10 bg-blue-900 text-white font-bold text-xs rounded">AMEX</div>
                <div className="flex items-center justify-center w-16 h-10 border-2 border-gray-300 rounded font-semibold">🍎 Pay</div>
                <div className="flex items-center justify-center w-16 h-10 border-2 border-gray-300 rounded">
                  <span className="text-sm font-semibold text-blue-600">Google Pay</span>
                </div>
                <div className="flex items-center justify-center w-16 h-10 border-2 border-gray-300 rounded">
                  <span className="text-xl">💳</span>
                </div>
                <div className="flex items-center justify-center w-16 h-10 bg-purple-600 text-white font-bold text-xs rounded">Pay</div>
                <div className="flex items-center justify-center w-16 h-10 border-2 border-blue-900 text-blue-900 font-bold">VISA</div>
              </div>
            </div>

            {/* Category, Tags, Brand */}
            <div className="space-y-2 pb-6">
              <div className="flex gap-3">
                <span className="font-semibold text-gray-800 min-w-fit">Category:</span>
                <span className="text-gray-700">Leather</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-gray-800 min-w-fit">Tags:</span>
                <span className="text-gray-700">Watches, Women</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-gray-800 min-w-fit">Brand:</span>
                <span className="text-gray-700">Watch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Browser Section */}
        <CategoryBrowser />
      </div>
    </div>
  )
}
