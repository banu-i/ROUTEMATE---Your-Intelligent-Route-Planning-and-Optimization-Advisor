# ![alt text](ROUTEMATEYour_Intelligent_Route_Planning_and_Optimization_Advisor.png)

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

<span style="color:red">

```json
{
  "semi": true, // Semikolons am Ende von Zeilen hinzufügen
  "trailingComma": "es5", // Trailing Commas nur für ES5-kompatible Konstrukte (z.B. Arrays, Objekte)
  "singleQuote": true, // Einfache Anführungszeichen statt doppelte verwenden
  "tabWidth": 2, // Tabulatorbreite auf 2 Leerzeichen setzen
  "printWidth": 80 // Maximale Zeilenlänge auf 80 Zeichen setzen
}
```

</span>

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

# Tools

## Frontend Tools

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## Backend Tools

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Deployment Tools

![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)

## Dev Tools

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

![PowerShell](https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white)
![YAML](https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

## Testing Tools

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

## Hosting Tools

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

# Usage Guide

# Configuration
