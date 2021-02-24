import React from 'react';
import GithubOutlined from '@ant-design/icons/GithubOutlined';
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness5 from "@material-ui/icons/Brightness5";

const Nav = ( val ) => {

  const themeIcon = val.darkMode ?
    <Brightness5 onClick={val.clickFunction} style={{ fontsize: 18 }} />
  :
    <Brightness4 onClick={val.clickFunction} style={{ fontsize: 18 }} />

  return(
    <div className='Nav ev-3 color-primary'>
      <div className='Nav-margins'>
        <div className='txt-xl'>
          {val.darkMode ? "Dark" : "Light" }
        </div>
        {themeIcon}
        <div>
          <a href='https://github.com/nrsimonelli' target="_blank" style={{ textDecoration: 'inherit', color: 'inherit' }}>
          <GithubOutlined style={{ fontSize: 18 }} />
          </a>
        </div>
        
      </div>
      
    </div>

  )
}

export default Nav;