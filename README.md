# ROUTEMATE---Your-Intelligent-Route-Planning-and-Optimization-Advisor

ROUTEMATE - Your Intelligent Route Planning and Optimization Advisor | APP with one repo: Frontend & Backend.

# Project Overview

# Installation

## Frontend

`npx create-react-app routemate-frontend-react`

`node --version v21.6.1`

`npm install react-router-dom`

`npm install axios`

### Codequalität und Formatierung

`npm install eslint --save-dev`

`npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev`
`npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev --force`

ESLint-Plugin für JSX-Zugänglichkeit (a11y = "accessibility") z. B. für Menschen mit Sehbehinderungen, die Screenreader verwenden.
`npm install eslint-plugin-jsx-a11y --save-dev`
`npm install eslint-plugin-jsx-a11y --save-dev --force`

```json
{
  "plugins": ["jsx-a11y"],
  "extends": ["plugin:jsx-a11y/recommended"]
}
```

Beispiel:
Wenn du einen Button ohne Text erstellst:

```jsx
<button></button>
```

Das Plugin würde warnen, dass der Button keinen zugänglichen Inhalt hat und daher für Screenreader nicht nutzbar ist.

`npm install prettier --save-dev`
`npm install prettier --save-dev --force`

### Konfiguration

`npx eslint --init`

`npm install eslint-config-prettier --save-dev`
``npm install eslint-config-prettier --save-dev --force`

Optional: Prettier mit ESLint integrieren.
Dadurch verhinderst du Konflikte, bei denen ESLint und Prettier verschiedene Formatierungsregeln durchsetzen wollen (z. B. Einrückungen, Semikolons usw.).
`npm install eslint-config-prettier  eslint-plugin-prettier --save-dev`

`npm install eslint-config-prettier  eslint-plugin-prettier --save-dev --force`

#### Prettier-Konfigurationsdatei

```json
{
  "semi": true, // Semikolons am Ende von Zeilen hinzufügen
  "trailingComma": "es5", // Trailing Commas nur für ES5-kompatible Konstrukte (z.B. Arrays, Objekte)
  "singleQuote": true, // Einfache Anführungszeichen statt doppelte verwenden
  "tabWidth": 2, // Tabulatorbreite auf 2 Leerzeichen setzen
  "printWidth": 80 // Maximale Zeilenlänge auf 80 Zeichen setzen
}
```

### Installation von concurrently | Mono-Repo: Frontend und Backend

Die bevorzugte Methode, da sie es ermöglicht, von einem zentralen Ort | Hauptprojektverzeichnis aus mehrere Skripte zu verwalten.

`npm install concurrently --save-dev`

```json
Hauptprojektverzeichnis:
{
  "scripts": {
    "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
    "start:frontend": "cd frontend && npm start",
    "start:backend": "cd backend && npm start"
  },
  "devDependencies": {
    "concurrently": "^8.2.2" // Stelle sicher, dass du die aktuelle Version verwendest
  }
}

Frontend:
 "scripts": {
    "start": "react-scripts start"
  },

Backend:
"scripts": {
    "start": "node index.js"
  },
```

## Backend

`mkdir routemate-backend-express`

Initialisierung - neues Node.js-Projekt
`npm init -y`

```javascript
package.json

{
  "name": "routemate-backend-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

`npm install express`

`node --version v21.6.1`

`npm install body-parser`

`npm install cors`

`npm install dotenv`

### Codequalität und Formatierung

`npm install eslint --save-dev`

`npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev`
`npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev --force`

ESLint-Plugin für JSX-Zugänglichkeit (a11y = "accessibility") z. B. für Menschen mit Sehbehinderungen, die Screenreader verwenden.
`npm install eslint-plugin-jsx-a11y --save-dev`
`npm install eslint-plugin-jsx-a11y --save-dev --force`

```json
{
  "plugins": ["jsx-a11y"],
  "extends": ["plugin:jsx-a11y/recommended"]
}
```

Beispiel:
Wenn du einen Button ohne Text erstellst:

```jsx
<button></button>
```

Das Plugin würde warnen, dass der Button keinen zugänglichen Inhalt hat und daher für Screenreader nicht nutzbar ist.

`npm install prettier --save-dev`
`npm install prettier --save-dev --force`

### Konfiguration

`npx eslint --init`

`npm install eslint-config-prettier --save-dev`
``npm install eslint-config-prettier --save-dev --force`

Optional: Prettier mit ESLint integrieren.
Dadurch verhinderst du Konflikte, bei denen ESLint und Prettier verschiedene Formatierungsregeln durchsetzen wollen (z. B. Einrückungen, Semikolons usw.).
`npm install eslint-config-prettier  eslint-plugin-prettier --save-dev`

`npm install eslint-config-prettier  eslint-plugin-prettier --save-dev --force`

#### Prettier-Konfigurationsdatei

```json
{
  "semi": true, // Semikolons am Ende von Zeilen hinzufügen
  "trailingComma": "es5", // Trailing Commas nur für ES5-kompatible Konstrukte (z.B. Arrays, Objekte)
  "singleQuote": true, // Einfache Anführungszeichen statt doppelte verwenden
  "tabWidth": 2, // Tabulatorbreite auf 2 Leerzeichen setzen
  "printWidth": 80 // Maximale Zeilenlänge auf 80 Zeichen setzen
}
```

### Installation von concurrently | Mono-Repo: Frontend und Backend

Die bevorzugte Methode, da sie es ermöglicht, von einem zentralen Ort | Hauptprojektverzeichnis aus mehrere Skripte zu verwalten.

`npm install concurrently --save-dev`

```json
Hauptprojektverzeichnis:
{
  "scripts": {
    "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
    "start:frontend": "cd frontend && npm start",
    "start:backend": "cd backend && npm start"
  },
  "devDependencies": {
    "concurrently": "^8.2.2" // Stelle sicher, dass du die aktuelle Version verwendest
  }
}

Frontend:
 "scripts": {
    "start": "react-scripts start"
  },

Backend:
"scripts": {
    "start": "node index.js"
  },
```

# Usage Guide

# Configuration
