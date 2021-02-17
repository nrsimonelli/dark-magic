import { React, useState } from 'react';
import './App.css';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch } from 'antd';

import Nav from '../Nav/Nav';


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
      <Nav />
     
      <div className="Content">
        <div className='test text-primary'>hello world</div>      
      </div>
      <div className="Content">
        <div className="square color-red-5">
          1
        </div>
        <div className="square color-volcano-5">
          2
        </div>
        <div className="square color-orange-5">
          3
        </div>
        <div className="square color-gold-5">
          4
        </div>
        <div className="square color-yellow-5">
          5
        </div>
        <div className="square color-lime-5">
          6
        </div>
        <div className="square color-green-5">
          7
        </div>
        <div className="square color-cyan-5">
          8
        </div>
        <div className="square color-blue-5">
          9
        </div>
        <div className="square color-geekblue-5">
          10
        </div>
        <div className="square color-purple-5">
          11
        </div>
        <div className="square color-magenta-5">
          12
        </div>
        </div>
        <div className='Content'>
        <div className="test link-blue">
          Link
        </div>
        <div className="test link-gold">
          Link
        </div>
        <div className="test link-green">
          Link
        </div>
        <div className="test link-red">
          Link
        </div>
        </div>
        

      
      <div className="Content">
        <div className="test">
        <Switch  checked={isDarkMode}  onChange={toggleTheme} />

        </div>
       
      

      </div>
      
    </div>
  );
}

export default App;
