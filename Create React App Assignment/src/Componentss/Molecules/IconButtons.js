
import React from 'react'
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
  function IconButtons() {
  return (
    <div>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
            </IconButton>
    </div>
  )
}

export default IconButtons
