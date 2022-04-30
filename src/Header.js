import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';


function Header() {
  return (
    <div className="header"> 
    
    <div className="header_left">
        <img src="https://chillitray.com/images/logos/footerLogoTransparent.png" alt="chilltary_logo" ></img>
        <div className='options'>
        <IconButton><h5>Feed</h5></IconButton>
        </div>
        <div className='options'>
        <IconButton><h5>Dashboard</h5></IconButton>
        </div>
        <div className='options'>
        <IconButton><h5>Lookup</h5></IconButton>
        </div>
        <div className='options'>
        <IconButton><h5>List</h5></IconButton>
        </div>
        <div className='options'>
        <IconButton><h5>Team</h5></IconButton> 
        </div>  
    </div>
      
      {/* <div className="header_center">
          <div className='header_input'>
            <IconButton><SearchIcon></SearchIcon></IconButton>
             <input type="text" />
          </div>
      </div> */}
  
      <div className="header_right">
          <IconButton><NotificationsActiveIcon></NotificationsActiveIcon></IconButton>
          <div className='header_info'>
             <IconButton><h5>Garvit Virmani</h5> </IconButton>        
             <Avatar variant="square"></Avatar>
          </div>
          <button className='btn'>Upgarde</button>
      </div>

    </div>
    )
}

export default Header