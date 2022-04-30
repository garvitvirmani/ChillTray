import React from 'react'
import "./SidebarRow.css";
import { Avatar } from '@mui/material';

function SidebarRow({ src,Icon,title}) {
  return (
    <div className='sidebarRow'>
     
     {src && <Avatar src={src}></Avatar>}
     {Icon && <Icon></Icon>}      
     <h4>{title}</h4>

    </div>
  )
}

export default SidebarRow