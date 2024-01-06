import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Navbar() {
  return (
<nav className="navbar">
<img src={logo} alt="logo" className='logo' />
<div className="desktopMenu">
<Link className="desktopMenuListItem">Home</Link>
<Link className="desktopMenuListItem">About</Link>
<Link className="desktopMenuListItem">Portfolio</Link>
<Link className="desktopMenuListItem">Projects</Link>
<Link className="desktopMenuListItem"></Link>

</div>
<button className="desktopMenuBtn"><ChatBubbleOutlineIcon/>Contact Me</button>
</nav>
  )
}

export default Navbar