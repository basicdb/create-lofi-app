# create-lofi-app

<div align="center">

🚀 A powerful starter kit for building local-first applications

[![Beta Status](https://img.shields.io/badge/status-beta-yellow.svg)](https://github.com/yourusername/create-lofi-app)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/basicdb/create-lofi-app/pulls)

⚠️ **Beta Notice**: This project is in beta stage. While it's stable enough for experimentation and early projects, expect some rough edges. We welcome your feedback and contributions!

[Getting Started](#getting-started) •
[Features](#features) •
[Documentation](#documentation) •
[Why Local-First?](#why-local-first) •
[Contributing](#contributing)

</div>

## 🌟 What is create-lofi-app?

create-lofi-app is an opinionated starter kit designed to make local-first development accessible and enjoyable. It provides everything you need to build modern, offline-capable applications that prioritize user data ownership and privacy.

### 🎯 Perfect for:
- Building offline-first web applications
- Creating privacy-focused tools
- Developing collaborative applications
- Prototyping local-first ideas quickly

## ✨ Features

- 🚀 **Lightning Fast Development** with [Vite](https://vitejs.dev/)
- ⚛️ **Modern React** ([React 19](https://react.dev/)) with TypeScript support
- 🛣️ **Seamless Routing** via [React Router](https://reactrouter.com/)
- 💅 **Beautiful Styling** with [Tailwind CSS](https://tailwindcss.com/)
- 📱 **PWA Ready** using [Vite-PWA](https://vite-pwa-org.netlify.app/guide/)
- 💾 **Local-First Database** powered by [Basic](https://docs.basic.tech)
- 🔄 **Built-in Sync Layer** for seamless data synchronization
- 📦 **Zero Configuration** - just create and start building

## 🚀 Getting Started

### Quick Start

```bash
# Create a new app
npx create-lofi-app my-app

# Navigate to your project
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your app in action!

## 📁 Project Structure

```
my-app/
├── src/
│   ├── assets/       # Static assets (images, fonts, etc.)
│   ├── components/   # Reusable React components
│   ├── pages/        # Application pages/routes
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
├── public/           # Public static assets
├── index.html        # HTML template
└── basic.config.ts   # Basic database configuration
```

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🤔 Why Local-First?

Local-first applications represent a paradigm shift in web development, offering numerous advantages:

### Key Benefits:
- 🔒 **Enhanced Privacy**: User data stays on their device by default
- ⚡ **Superior Performance**: No network latency for data operations
- 📴 **Offline Capability**: Full functionality without internet
- 🤝 **Data Ownership**: Users have complete control over their information
- 🔄 **Optional Sync**: Cloud synchronization when needed

## 🤝 Contributing

We love contributions! Whether it's:
- 🐛 Bug reports
- 💡 Feature suggestions
- 📝 Documentation improvements
- 🔧 Pull requests

Please feel free to contribute to make create-lofi-app better for everyone!

## 📚 Documentation

For detailed documentation and guides, visit:
- [Basic Documentation](https://docs.basic.tech)
- [Getting Started Guide](https://docs.basic.tech/getting-started)
- [API Reference](https://docs.basic.tech/api)

---

<div align="center">

Made with ❤️ by the create-lofi-app team

⭐ Star us on GitHub | [Report an Issue](https://github.com/basicdb/create-lofi-app/issues)

</div>



