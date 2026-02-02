import React, { useState } from 'react';
import { Search, Edit2, Trash2, Eye, Plus } from 'lucide-react';

export default function Campaigns({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('');

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2025',
      status: 'Active',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      budget: '$5,000',
      reach: '45,230',
      conversions: '1,245',
    },
    {
      id: 2,
      name: 'Spring Collection',
      status: 'Active',
      startDate: '2025-03-01',
      endDate: '2025-05-31',
      budget: '$3,500',
      reach: '32,150',
      conversions: '856',
    },
    {
      id: 3,
      name: "Valentine's Day Flash Sale",
      status: 'Completed',
      startDate: '2025-02-10',
      endDate: '2025-02-14',
      budget: '$2,000',
      reach: '18,900',
      conversions: '523',
    },
    {
      id: 4,
      name: 'New Year New Style',
      status: 'Completed',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      budget: '$4,200',
      reach: '52,100',
      conversions: '1,654',
    },
  ];

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : status === 'Completed'
      ? 'bg-gray-100 text-gray-800'
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Campaigns
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage your marketing campaigns
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2">
          <Plus size={20} />
          New Campaign
        </button>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4`}>
        <div className="relative">
          <Search size={20} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search campaigns..."
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {campaign.name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {campaign.startDate} to {campaign.endDate}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(campaign.status)}`}>
                {campaign.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-200">
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Budget</p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {campaign.budget}
                </p>
              </div>
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Reach</p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {campaign.reach}
                </p>
              </div>
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Conversions</p>
                <p className={`font-semibold text-green-600`}>{campaign.conversions}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition flex items-center justify-center gap-1">
                <Eye size={16} />
                View
              </button>
              <button className="flex-1 px-3 py-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition flex items-center justify-center gap-1">
                <Edit2 size={16} />
                Edit
              </button>
              <button className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
