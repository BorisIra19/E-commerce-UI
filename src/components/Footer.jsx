export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 md:py-12">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">kapee.</h2>
            <p className="text-gray-400 mb-6 text-xs md:text-sm leading-relaxed">
              Come to our very own best E-commerce shop where everything is on the lowest price over the net.
            </p>
            <div className="space-y-3 text-xs md:text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="font-bold">LOCATION:</span>
                <span>KIGALI-KANOMBE</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">PHONE:</span>
                <span>0783081398</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">EMAIL:</span>
                <span>borisiradukunda18@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">HOURS:</span>
                <span>Mon - Fri / 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-6 uppercase">Information</h3>
            <nav className="space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">About Us</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Store Location</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Shipping & Delivery</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Latest News</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Our Sitemap</a>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-6 uppercase">Our Service</h3>
            <nav className="space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Terms of Sale</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Customer Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Delivery Information</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Payments</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Saved Cards</a>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-6 uppercase">My Account</h3>
            <nav className="space-y-3">
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">My Account</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">My Shop</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">My Cart</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Checkout</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">My Wishlist</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs md:text-sm block">Tracking Order</a>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-6 uppercase">Newsletter</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">Subscribe to our mailing list to get the new updates!</p>
            <div className="flex flex-col gap-2 mb-6">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 md:py-3 text-gray-800 text-xs md:text-sm rounded" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 font-bold rounded transition text-xs md:text-sm">SIGN UP</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 flex items-center justify-center rounded hover:bg-blue-700 transition text-xs font-bold">f</a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 flex items-center justify-center rounded hover:bg-gray-600 transition text-xs">X</a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 flex items-center justify-center rounded hover:bg-blue-600 transition text-xs">in</a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-pink-500 flex items-center justify-center rounded hover:bg-pink-600 transition">cam</a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-red-600 flex items-center justify-center rounded hover:bg-red-700 transition text-xs">Y</a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 flex items-center justify-center rounded hover:bg-orange-600 transition text-xs">R</a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-red-500 flex items-center justify-center rounded hover:bg-red-600 transition text-xs">B</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-xs md:text-sm text-center">2026 kapee. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
