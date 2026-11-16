# 🛍️ ShopVibe — E-Commerce Store

A modern, fully responsive e-commerce product store built with **React.js** featuring product browsing, shopping cart, filters, and a stunning dark/light mode UI.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern_UI-1572B6?style=for-the-badge&logo=css3)

## ✨ Features

- 🛒 **Shopping Cart** — Add, remove, update quantities with real-time total
- 🔍 **Product Search** — Search products by name, category, or description
- 📂 **Category Filters** — Filter by Electronics, Fashion, Sports, Home, Food
- 📊 **Sort Products** — Sort by price, rating, name, or featured
- 🌙 **Dark/Light Mode** — Theme toggle with localStorage persistence
- 🎯 **Product Detail Modal** — Click any product for full details with savings info
- 🔔 **Toast Notifications** — Visual feedback when adding items to cart
- 💾 **Cart Persistence** — Cart saved in localStorage across sessions
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- 🎨 **Modern UI** — Smooth animations, hover effects, gradient accents

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| Context API + useReducer | State management (Cart) |
| CSS3 (Custom Properties) | Theming & responsive design |
| localStorage | Data persistence |

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/sheezan-droid/ecommerce-store.git
   cd ecommerce-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

> **No API key required!** Product data is included in the app.

## 📁 Project Structure

```
ecommerce-store/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navbar with search, theme toggle, cart
│   │   ├── Hero.js            # Hero/banner section
│   │   ├── Filters.js         # Category buttons & sort dropdown
│   │   ├── ProductCard.js     # Product card with hover effects
│   │   ├── ProductModal.js    # Product detail popup
│   │   ├── Cart.js            # Cart drawer/sidebar
│   │   └── Toast.js           # Toast notifications
│   ├── context/
│   │   └── CartContext.js     # Cart state management (Context + Reducer)
│   ├── data/
│   │   └── products.js        # Product catalog data
│   ├── App.js                 # Main app component
│   ├── App.css                # Component styles
│   └── index.css              # Global styles & animations
└── README.md
```

## 🎨 Key React Concepts Used

- **Context API** for global cart state management
- **useReducer** for complex state logic
- **useMemo** for optimized filtering & sorting
- **useCallback** for memoized functions
- **useEffect** for side effects (localStorage, theme)
- **Conditional rendering** for modals, empty states
- **Component composition** with props

## 📸 Features Showcase

| Feature | Description |
|---------|-------------|
| Product Grid | Responsive grid with hover effects & quick add |
| Shopping Cart | Slide-in drawer with quantity controls |
| Dark/Light Mode | Seamless theme switching |
| Product Modal | Detailed view with pricing & description |

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, give it a star!**
