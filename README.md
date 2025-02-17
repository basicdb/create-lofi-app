# create-lofi-app

A starter kit for building local-first apps

## Features

- 🚀 [Vite](https://vitejs.dev/) for lightning-fast development
- ⚛️ [React 19](https://react.dev/) with TypeScript 
- 🛣️ [React Router](https://reactrouter.com/) for client-side routing
- 💅 [Tailwind CSS](https://tailwindcss.com/) for easy styling
- 📱 PWA-ready out of the box
- 💾 [BasicDB](https://docs.basic.tech) for local-first db & sync
- 🔧 Pre-configured TypeScript and testing setup

## Installation

```bash
npx create-lofi-app my-app
cd my-app
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Your app will be available at `http://localhost:5173`

## Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
my-app/
├── src/
│   ├── assets/       # Images, fonts, and other static files
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
├── public/           # Static assets
├── index.html        # HTML template
└── basic.config.ts   # Basic database schema configuration

```

## Why Local-First?

Local-first applications prioritize storing data on the user's device while optionally syncing with the cloud. This approach offers several benefits:

- 🔒 Better privacy and data ownership
- ⚡ Faster performance
- 📴 Offline functionality

## License

MIT



