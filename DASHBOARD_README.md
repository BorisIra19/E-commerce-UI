# E-Commerce UI - Admin Dashboard

## Project Overview
A complete e-commerce platform with both customer-facing shop and admin dashboard management system.

---

## Features Completed

### E-Commerce Store (Existing)
- Home page with product grid
- Shop with category browsing
- Product detail pages (single image, ADD TO CART only)
- Shopping cart and wishlist management
- Checkout with auto-cart clearing
- User authentication (Login/Signup)
- User profile
- Blog and FAQ pages

### Admin Dashboard (NEW)
- Main Layout: Responsive sidebar and top header
- Dashboard V1: Metrics cards (Revenue, Orders, Customers, Conversion Rate)
- Sales Chart: Line chart showing sales and revenue trends
- Recent Orders Table: Live order data with status badges
- Top Products Section: Best-selling products
- Orders Management: Complete order listing with filtering and search
- Products Admin: Product grid/table view with add, edit, delete actions
- Customers Section: Customer list with contact info and order history
- Campaigns: Marketing campaign management with budget tracking
- Categories: Product category management
- Messages: Customer messaging system with conversation threads
- Dark Mode: Toggle between light/dark themes (persisted to localStorage)
- Notifications: Real-time notification bell with alerts
- User Menu: Profile, settings, logout in header
- Search: Global search in header
- Language Selector: UI language toggle

---

## How to Access Dashboard

After logging in, navigate to:
- Dashboard Home: /dashboard
- Orders: /admin/orders
- Products: /admin/products
- Categories: /admin/categories
- Customers: /admin/customers
- Campaigns: /admin/campaigns
- Messages: /admin/messages

---

## Tech Stack

- Frontend: React 18 and React Router v6
- Styling: Tailwind CSS
- Icons: Lucide React
- Charts: Recharts
- State Management: React Context (Auth) and Local State
- Build Tool: Vite

---

## Installation and Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── AdminLayout.jsx          # Dashboard main layout with sidebar
│   ├── Dashboard.jsx            # Dashboard home with metrics
│   ├── Orders.jsx               # Orders management page
│   ├── AdminProducts.jsx        # Products admin panel
│   ├── Customers.jsx            # Customers listing
│   ├── Campaigns.jsx            # Campaigns management
│   ├── Categories.jsx           # Categories management
│   ├── Messages.jsx             # Messaging system
│   ├── Home.jsx                 # E-commerce home
│   ├── Shop.jsx                 # Product shop
│   ├── ProductDetail.jsx        # Single product view
│   ├── Cart.jsx                 # Shopping cart
│   ├── Checkout.jsx             # Payment and checkout
│   ├── Header.jsx               # Site header
│   ├── Footer.jsx               # Site footer
│   ├── Login.jsx                # Login page
│   ├── Signup.jsx               # Signup page
│   └── ... other components
├── contexts/
│   └── AuthContext.jsx          # Authentication state
├── App.jsx                      # Main router and layout
├── main.jsx                     # Entry point
└── index.css                    # Global styles
```

---

## Design Features

- Responsive: Mobile-first design adapted for all screen sizes
- Dark Mode: Toggle dark/light theme with persistent state
- Modern UI: Clean, professional admin dashboard interface
- Color Coding: Status badges (Green=Active, Blue=Processing, Red=Cancelled)
- Charts: Interactive line charts for sales visualization
- Tables: Sortable, filterable tables with pagination
- Icons: Consistent iconography using Lucide React

---

## Authentication

- Local authentication using AuthContext
- localStorage persistence
- Protected dashboard routes (redirect to login if not authenticated)

---

## Dashboard Data

All data is currently mock/hardcoded for demonstration:
- 5 sample orders with different statuses
- 6 products with inventory
- 4 customers with order history
- 4 marketing campaigns
- 5 product categories
- 4 customer conversation threads

To integrate real data, connect to your backend API and replace mock data in components.

---

## Next Steps and Future Enhancements

- Order details page with full transaction info
- Add Product form with image upload
- Edit Product functionality
- Customer analytics
- Sales reports and export
- Backend API integration
- Real-time notifications
- Email notifications
- Inventory management
- Discount/promotion engine
- Payment gateway integration (Stripe, PayPal)
- Email marketing integration
- SMS notifications

---

## Notes for Developers

- Dark Mode: Managed via isDarkMode state in App.jsx, passed to all components
- Icons: Using Lucide React for consistent icons (replace as needed)
- Charts: Using Recharts - customize data/colors in Dashboard.jsx
- Styling: Tailwind utility classes for styling - modify colors in tailwind.config.js

---

## License

This project is provided as-is for educational purposes.

---

Last Updated: February 2, 2026
Version: 1.1.0 (Admin Dashboard Added)
