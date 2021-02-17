import { React, useState } from 'react';
import './App.css';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch } from 'antd';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  const { switcher, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === "loading") {
    return null;
  }



  return (
    <div className="App fade-in">
      <div>nav</div>
     
      <div>hello world</div>
          <Switch  checked={isDarkMode}  onChange={toggleTheme} />
      
    </div>
  );
}

export default App;
