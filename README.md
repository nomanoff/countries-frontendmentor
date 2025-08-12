# Countries Explorer 🌍

A responsive web app built with **React** and **Vite** for the [Frontend Mentor REST Countries API challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-48f6c6a0). Browse, search, and filter countries with light/dark theme support.

---

## Features

- 🌐 Browse all countries from the REST Countries API
- 🔍 Search for countries by name
- 🏳️ Filter by region
- 📄 View detailed country information (including border countries)
- 🌙 Light/Dark theme toggle
- 📱 Fully responsive design

---

## Demo

[Live Demo](#) <!-- Add your deployment link here -->

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/countries-frontendmentor.git
   cd countries-frontendmentor
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

---

## Project Structure

```
countries-frontendmentor/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [REST Countries API](https://restcountries.com/)
- [CSS Modules / Styled Components / Tailwind CSS] <!-- Edit as appropriate -->
- [React Router] <!-- If used -->

---

## Customization

- Update the API endpoint or add more features as needed.
- Style the app to match your preferences.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## License

[MIT](LICENSE)

---

_Created for the Frontend Mentor REST Countries API challenge._

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
