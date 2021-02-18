import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

const Nav = () => {
  return(
    <div className='Nav ev-3 color-primary'>
      <div className='Nav-margins'>
        <div className='txt-xl'>
          Theme switch
        </div>
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