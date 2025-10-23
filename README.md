# React + Electron Desktop App

A modern cross-platform desktop application built using React and Electron, featuring a clean sidebar navigation, theme toggle (Light/Dark), and a settings menu.

This project demonstrates seamless integration between a React front-end and an Electron desktop environment, providing a responsive and visually appealing user interface.

## Features
- Built using React + Electron
- Light / Dark theme toggle with image swapping
- Interactive settings dropdown
- Sidebar navigation with active state indicator
- Profile, Help, and Settings section
- Organized modular file structure with reusable components
- Context-based global theme management

## Tech Stack
| Category |	Technologies |
|---|---|
| Frontend | React.js, CSS Modules |
| Desktop Runtime | Electron |
| Routing	| React Router DOM |
| State Management | React Context API |
| Build Tool | Vite |
| Language | JavaScript (ES6+) |

## Folder Structure
```
project-root/
│
├── public/
│
├── src/
│   ├── assets/                # Images and icons
│   ├── Components/
│   │   ├── Nav/               # Navbar component
│   │   ├── Home/              # Homepage UI
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme state provider
│   ├── App.jsx
│   ├── main.jsx
│   ├── electron/
│   │   └── main.js            # Electron entry file
│
├── package.json
└── README.md
```

## Installation & Setup
Follow these steps to run the app locally 👇
```
# 1. Clone this repository
git clone https://github.com/<Thiwanka-dot/sonola.git

# 2. Navigate into the project folder
cd sonola

# 3. Install dependencies
npm install

# 4. Start the React development server
npm run dev

# 5. In another terminal, start Electron
npm run electron
```

>💡 Make sure both the React dev server and Electron process are running together for full functionality.

## Author

Thiwanka Lakmal Dissanayake
>📍 Software Engineering Undergraduate | MERN Stack Enthusiast
