import React, { useState } from 'react';
import { Search, Edit2, Trash2, Mail, Phone } from 'lucide-react';

export default function Customers({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      joined: '2025-01-15',
      orders: 5,
      spent: '$1,245.50',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 (555) 234-5678',
      joined: '2025-01-20',
      orders: 3,
      spent: '$567.99',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+1 (555) 345-6789',
      joined: '2024-12-10',
      orders: 12,
      spent: '$3,456.75',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      phone: '+1 (555) 456-7890',
      joined: '2025-01-25',
      orders: 1,
      spent: '$428.75',
      status: 'Inactive',
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Customers
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage your customer base
          </p>
        </div>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4`}>
        <div className="relative">
          <Search size={20} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search customers..."
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
                  Contact
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Joined
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Orders
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Total Spent
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
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <td className={`py-4 px-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {customer.name}
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {customer.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {customer.phone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {customer.joined}
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {customer.orders}
                  </td>
                  <td className={`py-4 px-6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {customer.spent}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {customer.status}
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
