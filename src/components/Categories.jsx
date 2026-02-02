import React, { useState } from 'react';
import { Search, Edit2, Trash2, Plus } from 'lucide-react';

export default function Categories({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 1, name: 'Shirts', description: 'T-shirts and casual wear', products: 45, status: 'Active' },
    { id: 2, name: 'Jackets', description: 'Outerwear and jackets', products: 23, status: 'Active' },
    { id: 3, name: 'Pants', description: 'Trousers and denim', products: 67, status: 'Active' },
    { id: 4, name: 'Dresses', description: 'Women dresses and gowns', products: 34, status: 'Active' },
    { id: 5, name: 'Accessories', description: 'Belts, watches, wallets', products: 89, status: 'Active' },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Categories
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage product categories
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2">
          <Plus size={20} />
          Add Category
        </button>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4`}>
        <div className="relative">
          <Search size={20} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search categories..."
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

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Products
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category) => (
                <tr
                  key={category.id}
                  className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <td className={`py-4 px-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.name}
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {category.description}
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {category.products}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {category.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-amber-100 hover:text-amber-600 rounded-lg transition">
                        <Edit2 size={18} />
                      </button>
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
    </div>
  );
}
