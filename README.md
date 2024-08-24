# Modular Compliance Dashboard

## Development Environment

## Required

Node.js (version 14.x or higher) - Preferably Node 18
npm hoặc Yarn

React 18
Vite 5

**Project Setup**

git clone https://github.com/thuan27/color-combination-app.git
cd color-combination-app
'npm install' or 'yarn install'

**Running the Application**
Run: npm run dev
Build: npm run build
Test: npm test

**Source Code Documentation**

🚀 Components: UI components are organized in the src/components directory.

- Component.tsx: TypeScript and HTML code file
- style.scss: Independent styles for each component
- {name}Slice.ts: Setup of toolkit slice for each component
  🛠️ Redux: Redux configuration and state slices are in the src/redux directory.

- store: Configures the Redux store

📦 Elements: Configuration of shared elements (input, table, loading...)

🚀 Assets: Stores SCSS files, images, sounds...

🛠️ Types: Configuration of interfaces

📦 vite-env: Stores base API URLs, project keys

🚀 package.json: Lists installed packages

🛠️ tsconfig.json, vite.config.ts: Project configuration files

## Redux Configuration

src/redux/store.ts: Redux store configuration.
