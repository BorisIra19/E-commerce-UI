import React, { useState } from 'react';
import { Search, Edit2, Trash2, Eye, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminProducts({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      category: 'Shirts',
      price: '$10.00',
      stock: 150,
      sales: 523,
      image: '/src/assets/tshirt.jpg',
    },
    {
      id: 2,
      name: 'Blue Jacket',
      category: 'Jackets',
      price: '$24.00',
      stock: 82,
      sales: 412,
      image: '/src/assets/blue-jacket.jpg',
    },
    {
      id: 3,
      name: 'Denim Jeans',
      category: 'Pants',
      price: '$20.00',
      stock: 95,
      sales: 387,
      image: '/src/assets/jeans.jpg',
    },
    {
      id: 4,
      name: 'Casual Dress',
      category: 'Dresses',
      price: '$25.00',
      stock: 67,
      sales: 341,
      image: '/src/assets/dress.jpg',
    },
    {
      id: 5,
      name: 'Blouse',
      category: 'Shirts',
      price: '$18.00',
      stock: 120,
      sales: 289,
      image: '/src/assets/blouse.jpg',
    },
    {
      id: 6,
      name: 'Navy Shirt',
      category: 'Shirts',
      price: '$15.00',
      stock: 200,
      sales: 456,
      image: '/src/assets/navy-shirt.jpg',
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Products
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage your product inventory
          </p>
        </div>
        <Link
          to="/admin/products/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
        >
          <Plus size={20} />
          Add Product
        </Link>
      </div>

      {/* Filters */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 flex gap-4 flex-wrap`}>
        <div className="flex-1 min-w-64">
          <div className="relative">
            <Search size={20} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300'
              } focus:outline-none focus:border-blue-500`}
            />
          </div>
        </div>

        <select
          className={`px-4 py-2 rounded-lg border ${
            isDarkMode
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          } focus:outline-none focus:border-blue-500`}
        >
          <option>All Categories</option>
          <option>Shirts</option>
          <option>Jackets</option>
          <option>Pants</option>
          <option>Dresses</option>
        </select>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition`}
            >
              <div className={`h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center overflow-hidden`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
                />
              </div>
              <div className="p-4">
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {product.name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.category}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{product.price}</span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Stock: {product.stock}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/admin/products/${product.id}`}
                    className="flex-1 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition flex items-center justify-center gap-1"
                  >
                    <Eye size={16} />
                    View
                  </Link>
                  <Link
                    to={`/admin/products/${product.id}/edit`}
                    className="flex-1 px-3 py-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition flex items-center justify-center gap-1"
                  >
                    <Edit2 size={16} />
                    Edit
                  </Link>
                  <button className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
                  <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Product Name
                  </th>
                  <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Category
                  </th>
                  <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Price
                  </th>
                  <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Stock
                  </th>
                  <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Sales
                  </th>
                  <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
                  >
                    <td className={`py-4 px-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {product.name}
                    </td>
                    <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.category}
                    </td>
                    <td className={`py-4 px-6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {product.price}
                    </td>
                    <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.stock}
                    </td>
                    <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.sales}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link
                          to={`/admin/products/${product.id}`}
                          className="p-2 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition"
                        >
                          <Eye size={18} />
                        </Link>
                        <Link
                          to={`/admin/products/${product.id}/edit`}
                          className="p-2 hover:bg-amber-100 hover:text-amber-600 rounded-lg transition"
                        >
                          <Edit2 size={18} />
                        </Link>
                        <button className="p-2 hover:bg-red-100 hover:text-red-600 rounded-lg transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
