import React from 'react'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box sx={{backgroundColor:"rgb(255,215,0)", p:3}}>
        <Link to={"/"} >home</Link>
    </Box>
  )
}

export default Header