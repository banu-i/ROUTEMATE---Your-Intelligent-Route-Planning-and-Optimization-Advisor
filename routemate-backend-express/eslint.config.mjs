// // eslint.config.mjs - empfohlen, da es eine neuere Konfiguration Methode - ABER!!!
// Allerdings .eslintrc bevorzug, da Plugins bereits installiert sind.

// ggf. eslint.config.msj löschen - alle Informatinonen sind im .eslintrc hinterlegt.
// Datei nur zur "Verständnis der neueren Methode behalten"

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
// import pluginJsxA11y from "eslint-plugin-jsx-a11y"; // JSX-Accessibility Plugin
// import pluginPrettier from "eslint-plugin-prettier"; // Prettier Plugin

// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: {
//       globals: globals.browser,
//       ecmaVersion: "latest", // Optional: moderne ECMAScript-Version verwenden
//       sourceType: "module", // Falls ES-Module verwendet wird
//       ecmaFeatures: { jsx: true }, // Falls man JSX unterstützt
//     },
//   },
//   pluginJs.configs.recommended, // ESLint-Empfehlungen
//   pluginReact.configs.flat.recommended, // React-Empfehlungen (flache Konfiguration)
//   {
//     plugins: {
//       "jsx-a11y": pluginJsxA11y, // JSX-Accessibility Plugin
//       prettier: pluginPrettier, // Prettier Plugin
//     },
//     rules: {
//       "prettier/prettier": "error", // Prettier-Formatierungsfehler als ESLint-Fehler
//       "react/react-in-jsx-scope": "off", // Abschalten, wenn man React 17+ verwendet
//       "react/prop-types": "off", // Falls man TypeScript oder keine PropTypes nutzt
//     },
//   },
//   pluginJsxA11y.configs.recommended, // JSX-Accessibility-Empfehlungen
//   {
//     rules: {
//       // Hier kannst man zusätzliche Regeln anpassen, falls nötig
//     },
//   },
// ];
