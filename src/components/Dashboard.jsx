import React, { useState } from 'react';
import { TrendingUp, ShoppingCart, Users, Percent } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard({ isDarkMode }) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const metricsData = [
    {
      title: 'Total Revenue',
      value: '$48,500',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'blue',
      bgColor: isDarkMode ? 'bg-blue-900' : 'bg-blue-100',
    },
    {
      title: 'Total Orders',
      value: '1,240',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'green',
      bgColor: isDarkMode ? 'bg-green-900' : 'bg-green-100',
    },
    {
      title: 'Active Customers',
      value: '856',
      change: '+5.1%',
      icon: Users,
      color: 'purple',
      bgColor: isDarkMode ? 'bg-purple-900' : 'bg-purple-100',
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.3%',
      icon: Percent,
      color: 'orange',
      bgColor: isDarkMode ? 'bg-orange-900' : 'bg-orange-100',
    },
  ];

  const chartData = [
    { name: 'Mon', sales: 4000, revenue: 2400 },
    { name: 'Tue', sales: 3000, revenue: 1398 },
    { name: 'Wed', sales: 2000, revenue: 9800 },
    { name: 'Thu', sales: 2780, revenue: 3908 },
    { name: 'Fri', sales: 1890, revenue: 4800 },
    { name: 'Sat', sales: 2390, revenue: 3800 },
    { name: 'Sun', sales: 3490, revenue: 4300 },
  ];

  const recentOrdersData = [
    { id: '#ORD-001', customer: 'John Doe', date: '2025-02-01', status: 'Delivered', total: '$245.00' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2025-02-01', status: 'Processing', total: '$189.99' },
    { id: '#ORD-003', customer: 'Bob Johnson', date: '2025-01-31', status: 'Shipped', total: '$356.50' },
    { id: '#ORD-004', customer: 'Alice Brown', date: '2025-01-31', status: 'Pending', total: '$428.75' },
    { id: '#ORD-005', customer: 'Charlie Wilson', date: '2025-01-30', status: 'Delivered', total: '$312.25' },
  ];

  const topProducts = [
    { id: 1, name: 'Classic T-Shirt', sales: 523, revenue: '$5,230' },
    { id: 2, name: 'Blue Jacket', sales: 412, revenue: '$9,880' },
    { id: 3, name: 'Denim Jeans', sales: 387, revenue: '$7,740' },
    { id: 4, name: 'Casual Dress', sales: 341, revenue: '$8,525' },
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

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Dashboard
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex space-x-2">
          {['day', 'week', 'month'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg capitalize ${
                selectedPeriod === period
                  ? 'bg-blue-500 text-white'
                  : isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.title}
              className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {metric.title}
                  </p>
                  <p className={`text-2xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {metric.value}
                  </p>
                  <p className="text-sm text-green-600 mt-2">{metric.change}</p>
                </div>
                <div className={`${metric.bgColor} p-4 rounded-lg`}>
                  <Icon size={24} className={`text-${metric.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className={`lg:col-span-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Sales & Revenue
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <XAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                  border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Top Products
          </h2>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {product.name}
                  </h3>
                  <span className="text-green-600 font-semibold">{product.revenue}</span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.sales} sales
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Orders
          </h2>
          <a href="/admin/orders" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Order ID
                </th>
                <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Customer
                </th>
                <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Date
                </th>
                <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Status
                </th>
                <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrdersData.map((order) => (
                <tr
                  key={order.id}
                  className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <td className={`py-3 px-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {order.id}
                  </td>
                  <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.customer}
                  </td>
                  <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.date}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className={`py-3 px-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {order.total}
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
