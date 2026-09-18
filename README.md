# ACM Student Chapter — Timeline Website

A modern, responsive timeline website created for the ACM Student Chapter at Banasthali Vidyapith.

The website showcases the chapter's journey, events, activities, and memorable moments through an interactive timeline and image galleries.

## Features

- Interactive event timeline
- Event navigation using previous and next buttons
- Event image galleries with thumbnails
- Featured event details
- Responsive design for desktop, tablet, and mobile
- Smooth animations using Framer Motion
- Modern blue and white user interface
- Event information including date, location, category, and audience
- Interactive gallery modal

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS3
- Framer Motion
- Lucide React
- HTML5

## Project Structure

```text
timeline-main/
│
├── public/
│   └── events/
│       ├── orientation/
│       ├── guest-lecture/
│       ├── project-propel/
│       ├── mentorship/
│       ├── technoverse/
│       ├── dsa/
│       ├── badge-ceremony/
│       ├── innovation-mixer/
│       └── experience-sharing/
│
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Timeline.jsx
│   │   ├── Timeline.css
│   │   ├── EventModal.jsx
│   │   └── EventModal.css
│   │
│   ├── data/
│   │   └── events.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
