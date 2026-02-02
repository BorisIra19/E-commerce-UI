import { useNavigate } from 'react-router-dom'
import menImage from '../assets/hoody.jpg'
import womenImage from '../assets/navy-shirt.jpg'
import shoesImage from '../assets/blue-jacket.jpg'
import bagsImage from '../assets/striped-shirt.jpg'
import walletImage from '../assets/wallet.jpg'
import tshirtImage from '../assets/tshirt.jpg'
import shirtImage from '../assets/shirt.jpg'
import jeansImage from '../assets/jeans.jpg'
import dressImage from '../assets/dress.jpg'
import skirtImage from '../assets/skirt.jpg'
import blouseImage from '../assets/blouse.jpg'

export default function CategoryBrowser() {
  const navigate = useNavigate()

  const categories = [
    { id: 1, name: 'Men', image: menImage },
    { id: 2, name: 'Women', image: womenImage },
    { id: 3, name: 'Shoes', image: shoesImage },
    { id: 4, name: 'Bags & Back...', image: bagsImage },
    { id: 5, name: 'Watches', image: menImage },
    { id: 6, name: 'Jewellery', image: womenImage },
    { id: 7, name: 'Wallets', image: walletImage },
    { id: 8, name: 'T-Shirts', image: tshirtImage },
    { id: 9, name: 'Shirts', image: shirtImage },
    { id: 10, name: 'Jeans', image: jeansImage },
    { id: 11, name: 'Dresses', image: dressImage },
    { id: 12, name: 'Skirts', image: skirtImage },
    { id: 13, name: 'Blouses', image: blouseImage },
    { id: 14, name: 'Accessories', image: bagsImage },
    { id: 15, name: 'Tops', image: tshirtImage }
  ]

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-white">
      <div className="overflow-x-auto pb-4 md:pb-0">
        <div className="flex gap-6 md:gap-8 lg:gap-10 min-w-max md:min-w-full md:justify-center flex-wrap md:flex-nowrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => navigate('/')}
              className="flex flex-col items-center gap-3 hover:opacity-80 transition flex-shrink-0"
            >
              {/* Circular Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-md hover:shadow-lg transition flex-shrink-0 border-2 border-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category Name */}
              <p className="text-xs md:text-sm font-semibold text-gray-800 text-center w-20 md:w-24 leading-tight">
                {category.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
