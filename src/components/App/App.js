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
      <div className="Content">
        <div className="square">
          1
        </div>
        <div className="square">
          2
        </div>
        <div className="square">
          3
        </div>
        <div className="square">
          4
        </div>
      </div>
      <div>
      <Switch  checked={isDarkMode}  onChange={toggleTheme} />

      </div>
      
    </div>
  );
}

export default App;
