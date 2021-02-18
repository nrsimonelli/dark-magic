import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import "./index.css";

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};


ReactDOM.render(
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light" >
      <App />
    </ThemeSwitcherProvider>,
  document.getElementById('root')
);