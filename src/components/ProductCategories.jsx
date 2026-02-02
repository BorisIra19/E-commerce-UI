import { useState } from 'react'
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

export default function ProductCategories() {
  const navigate = useNavigate()

  const categories = [
    {
      name: 'RECENT',
      products: [
        { id: 1, name: 'Men Hooded Navy Blue', price: '$70.00 - $95.00', rating: '5★', oldPrice: null, image: hoodyImage },
        { id: 2, name: 'Navy Multi-Function Watch', price: '$49.00', rating: '4★', oldPrice: '$85.00', image: watchImage },
        { id: 3, name: 'Women Printed Dress', price: '$47.00', rating: '4.2★', oldPrice: null, image: dressImage },
        { id: 4, name: 'Striped Casual Shirt', price: '$39.00', rating: '4.5★', oldPrice: null, image: stripedShirtImage },
        { id: 5, name: 'Premium Leather Wallet', price: '$35.00', rating: '4.7★', oldPrice: '$50.00', image: walletImage },
        { id: 6, name: 'Classic Cotton Tee', price: '$15.00', rating: '4.1★', oldPrice: null, image: tshirtImage },
        { id: 7, name: 'Formal Office Shirt', price: '$45.00', rating: '4.0★', oldPrice: '$65.00', image: shirtImage },
        { id: 8, name: 'Blue Skinny Jeans', price: '$55.00', rating: '4.3★', oldPrice: null, image: jeansImage },
        { id: 9, name: 'Women Mini Skirt', price: '$40.00', rating: '3.9★', oldPrice: null, image: skirtImage },
        { id: 10, name: 'Women Casual Blouse', price: '$35.00', rating: '4.2★', oldPrice: '$55.00', image: blouseImage },
        { id: 11, name: 'Casual Shoes', price: '$65.00', rating: '4.6★', oldPrice: '$89.00', image: shoesImage }
      ]
    },
    {
      name: 'FEATURED',
      products: [
        { id: 4, name: 'Men Hooded Navy Blue & Grey T-Shirt', price: '$70.00 - $95.00', rating: '5★', oldPrice: null, image: hoodyImage },
        { id: 5, name: 'Women Off White Printed Bl...', price: '$47.00', rating: '27★', oldPrice: null, image: blueJacketImage },
        { id: 6, name: 'Men Blue Skinny Fit Stretcha...', price: '$120.00', rating: '2★', oldPrice: null, image: stripedShirtImage }
      ]
    },
    {
      name: 'ON SALE',
      products: [
        { id: 7, name: 'Men Hooded Navy Blue & Grey T-Shirt', price: '$70.00 - $95.00', rating: '5★', oldPrice: null, image: hoodyImage },
        { id: 8, name: 'Navy Blue-Silver-White Multi...', price: '$49.00', rating: '4★', oldPrice: '$85.00', image: navyShirtImage },
        { id: 9, name: 'Men Navy & Red Checked Sli...', price: '$99.00 - $124.00', rating: '3.5★', oldPrice: null, image: stripedShirtImage }
      ]
    },
    {
      name: 'TOP RATED',
      products: [
        { id: 10, name: 'Men Hooded Navy Blue & Grey T-Shirt', price: '$70.00 - $95.00', rating: '5★', oldPrice: null, image: hoodyImage },
        { id: 11, name: 'Men Navy & White Striped Sh...', price: '$49.00 - $54.00', rating: '5★', oldPrice: null, image: stripedShirtImage },
        { id: 12, name: 'Women Blue Skinny Fit Stretc...', price: '$70.00 - $78.00', rating: '5★', oldPrice: null, image: blueJacketImage }
      ]
    }
  ]

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`)
  }

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-white">
      {categories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-blue-500">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {category.products.map((product) => (
              <div key={product.id} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition cursor-pointer" onClick={() => handleProductClick(product)}>
                <div className="h-40 md:h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-500 font-semibold text-sm overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>[Product Image]</span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
