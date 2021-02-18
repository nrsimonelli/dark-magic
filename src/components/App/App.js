import { React, useState } from 'react';
import './App.css';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Slider } from 'antd';

import Nav from '../Nav/Nav';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  const [colorValue, setColorValue] = useState(5);
  const { switcher, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  const handleSlider = (value) => {
    setColorValue(value);
    console.log('color value set to', value);
    console.log('colorValue state', colorValue);
  }

  if (status === "loading") {
    return null;
  }

  const colorLib = [
    {color: 'red'},
    {color: 'volcano'},
    {color: 'orange'},
    {color: 'gold'},
    {color: 'yellow'},
    {color: 'lime'},
    {color: 'green'},
    {color: 'cyan'},
    {color: 'blue'},
    {color: 'geekblue'},
    {color: 'purple'},
    {color: 'magenta'},
  ];



  return (
    <div className="App fade-in ev-0">
      <Nav />
     
      <div className="Content ev-2">
        <div className='test text-primary'>color level</div>
        
        <div className='test-2'>
        <Slider min={1} max={10} onChange={handleSlider} value={colorValue} style={{ width: 400 }} />
        </div>
        
      </div>
      <div className="Content ev-2">
        <div className="square color-red-5">
          red
        </div>
        <div className="square color-volcano-5">
          volcano
        </div>
        <div className="square color-orange-5">
          orange
        </div>
        <div className="square color-gold-5">
          gold
        </div>
        <div className="square color-yellow-5">
          yellow
        </div>
        <div className="square color-lime-5">
          lime
        </div>
        <div className="square color-green-5">
          green
        </div>
        <div className="square color-cyan-5">
          cyan
        </div>
        <div className="square color-blue-5">
          blue
        </div>
        <div className="square color-geekblue-5">
          geekblue
        </div>
        <div className="square color-purple-5">
          purple
        </div>
        <div className="square color-magenta-5">
          magenta
        </div>
        </div>
        <div className='Content ev-2'>
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
        

      
      <div className="Content ev-2">
        <div className="test">
        <Switch  checked={isDarkMode}  onChange={toggleTheme} />

        </div>
       
      

      </div>
      
    </div>
  );
}

export default App;
