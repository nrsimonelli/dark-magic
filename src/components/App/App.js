import { React, useState } from 'react';
import './App.css';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Slider } from 'antd';

import Nav from '../Nav/Nav';

const COLOR_LIB = [
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
        {COLOR_LIB.map(e => 
          <div 
            key={e.color} 
            className={colorValue >= 6 
              ? 
              `square txt-lg color-${e.color}-${colorValue} txt-primary` 
              : 
              `square txt-lg color-${e.color}-${colorValue}`
            }
          >
            {e.color}
          </div>

          )}
        </div>
        <div className='Content ev-2'>
          <div className='test-2'>
          <div className="link-blue">
          Link
        </div>
        <div className="link-gold">
          Link
        </div>
        <div className="link-green">
          Link
        </div>
        <div className="link-red">
          Link
        </div>

          </div>
        
        </div>
        

      
      <div className="Content ev-2">
      <div className="test">
        theme switch

        </div>
        <div className="test">
        <Switch  checked={isDarkMode}  onChange={toggleTheme} />

        </div>
       
      

      </div>
      
    </div>
  );
}

export default App;
