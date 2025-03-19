import { IFile } from "../Interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `interface IProps {}

const Button = ({}: IProps) => {
  return <button>Click me!</button>;
};

export default Button;`,
            },
            {
              id: uuid(),
              name: "Header.tsx",
              isFolder: false,
              content: `const Header = () => {
  return <header><h1>Welcome to VS Code Clone</h1></header>;
};

export default Header;`,
            },
            {
              id: uuid(),
              name: "Footer.tsx",
              isFolder: false,
              content: `const Footer = () => {
  return <footer><p>© 2025 VS Code Clone</p></footer>;
};

export default Footer;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "styles",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "global.css",
              isFolder: false,
              content: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}`,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <Footer />
    </div>
  );
};

export default App;`,
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
          content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
        },
      ],
    },
    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content: `# VS Code Clone

This is a simple file structure representation for a VS Code-like project explorer.`,
    },
  ],
};
