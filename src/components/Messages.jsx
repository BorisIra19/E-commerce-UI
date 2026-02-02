import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';

export default function Messages({ isDarkMode }) {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Are these available in XL?', time: '5 min ago', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'When will this be back in stock?', time: '1 hour ago', unread: 0 },
    { id: 3, name: 'Bob Johnson', lastMessage: 'Is there a discount for bulk orders?', time: '2 hours ago', unread: 0 },
    { id: 4, name: 'Alice Brown', lastMessage: 'Thank you for your order!', time: '1 day ago', unread: 0 },
  ];

  const messages = [
    { id: 1, sender: 'John Doe', text: 'Hi, do you have this in size 40?', timestamp: '10:30 AM', isUser: false },
    { id: 2, sender: 'You', text: 'Yes, we do! We have stock available.', timestamp: '10:32 AM', isUser: true },
    { id: 3, sender: 'John Doe', text: 'Great! Are these available in XL?', timestamp: '10:35 AM', isUser: false },
  ];

  return (
    <div className={`p-6 h-[calc(100vh-80px)] flex flex-col gap-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div>
        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Messages
        </h1>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage customer conversations
        </p>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Conversations List */}
        <div className={`w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm flex flex-col`}>
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search size={20} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search conversations..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300'
                } focus:outline-none focus:border-blue-500`}
              />
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`p-4 border-b cursor-pointer transition ${
                  selectedConversation === conv.id
                    ? isDarkMode ? 'bg-blue-900' : 'bg-blue-50'
                    : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {conv.name}
                    {conv.unread > 0 && (
                      <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {conv.unread}
                      </span>
                    )}
                  </h3>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {conv.time}
                  </span>
                </div>
                <p className={`text-sm truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {conv.lastMessage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm flex flex-col`}>
          {/* Chat Header */}
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {conversations.find((c) => c.id === selectedConversation)?.name}
            </h2>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.isUser
                      ? 'bg-blue-600 text-white'
                      : isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className={`text-xs mt-1 block ${msg.isUser ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className={`flex-1 px-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300'
                } focus:outline-none focus:border-blue-500`}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
