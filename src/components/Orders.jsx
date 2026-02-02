import React, { useState } from 'react';
import { ChevronDown, Search, Edit2, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Orders({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  const orders = [
    { id: '#ORD-001', customer: 'John Doe', email: 'john@example.com', date: '2025-02-01', status: 'Delivered', total: '$245.00', items: 3 },
    { id: '#ORD-002', customer: 'Jane Smith', email: 'jane@example.com', date: '2025-02-01', status: 'Processing', total: '$189.99', items: 2 },
    { id: '#ORD-003', customer: 'Bob Johnson', email: 'bob@example.com', date: '2025-01-31', status: 'Shipped', total: '$356.50', items: 4 },
    { id: '#ORD-004', customer: 'Alice Brown', email: 'alice@example.com', date: '2025-01-31', status: 'Pending', total: '$428.75', items: 5 },
    { id: '#ORD-005', customer: 'Charlie Wilson', email: 'charlie@example.com', date: '2025-01-30', status: 'Delivered', total: '$312.25', items: 2 },
    { id: '#ORD-006', customer: 'Diana Prince', email: 'diana@example.com', date: '2025-01-30', status: 'Cancelled', total: '$89.50', items: 1 },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-green-100 text-green-800',
      'Processing': 'bg-blue-100 text-blue-800',
      'Shipped': 'bg-purple-100 text-purple-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Cancelled': 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Orders
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage and track all customer orders
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
          + New Order
        </button>
      </div>

      {/* Filters */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 flex gap-4 flex-wrap`}>
        <div className="flex-1 min-w-64">
          <div className="relative">
            <Search size={20} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search orders..."
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
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={`px-4 py-2 rounded-lg border ${
            isDarkMode
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          } focus:outline-none focus:border-blue-500`}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`px-4 py-2 rounded-lg border ${
            isDarkMode
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          } focus:outline-none focus:border-blue-500`}
        >
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest Amount</option>
          <option value="lowest">Lowest Amount</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Order ID
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Customer
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Date
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Items
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Total
                </th>
                <th className={`text-left py-4 px-6 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <td className={`py-4 px-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {order.id}
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {order.customer}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {order.email}
                      </p>
                    </div>
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.date}
                  </td>
                  <td className={`py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.items}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className={`py-4 px-6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {order.total}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/orders/${order.id}`}
                        className="p-2 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition"
                        title="View"
                      >
                        <Eye size={18} />
                      </Link>
                      <button
                        className="p-2 hover:bg-amber-100 hover:text-amber-600 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        className="p-2 hover:bg-red-100 hover:text-red-600 rounded-lg transition"
                        title="Delete"
                      >
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

      {/* Pagination */}
      <div className={`flex justify-between items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <p>Showing 1 to {filteredOrders.length} of {orders.length} orders</p>
        <div className="flex gap-2">
          <button className={`px-3 py-1 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            Previous
          </button>
          <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">1</button>
          <button className={`px-3 py-1 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            2
          </button>
          <button className={`px-3 py-1 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
