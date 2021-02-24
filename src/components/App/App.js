import { React, useState, useCallback, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorValue, setColorValue] = useState(5);
  
  const { switcher, status, themes } = useThemeSwitcher();
  
  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  const handleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      switcher({ theme: themes.dark });
    } else {
      switcher({ theme: themes.light });
    }
  }, [isDarkMode, switcher, themes]);

  const handleSlider = (value) => {
    setColorValue(value);
  }

  if (status === "loading") {
    return null;
  }

  const darkToggle = <div className="test">
    <Switch checked={isDarkMode} onChange={toggleTheme} />
  </div>;

  return (
    <div className="App fade-in ev-0">
      <Nav darkMode={isDarkMode} clickFunction={handleTheme} />
      <div className="Content ev-2">
        <div className='test text-primary'>
          color level
        </div>
        <div className='test-2'>
          <Slider min={1} max={10} onChange={handleSlider} value={colorValue} tooltipVisible={false} style={{ width: 400 }} />
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
        {darkToggle}
      </div>   
    </div>
  );
}

export default App;
