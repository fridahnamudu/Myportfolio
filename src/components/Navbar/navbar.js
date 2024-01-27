import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [showMenu, setShowMenu] = useState (false);
  return (
<nav className="navbar">
<img src={logo} alt="logo" className='logo' />
<div className="desktopMenu">
<Link activeClass='active' to='intro' spy = {true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
<Link  activeClass='active' to='skills' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
<Link activeClass='active' to='projects' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
{/* <Link activeClass='active' to='contact' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link> */}
<Link activeClass='active' to='intro' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"></Link>
</div>

<button className="desktopMenuBtn" onClick={ () =>{ 
  var imageElement = document.getElementsByClassName('contactForm1');
  imageElement[0].scrollIntoView({behavior: 'smooth'});}}> <ChatBubbleOutlineIcon /> Contact Me </button>

<div className="mobMenu"><MenuIcon onClick={()=> setShowMenu(!showMenu)}/> </div>
<div className="navMenu" style={{display: showMenu? 'flex' : 'none' }}>
<Link activeClass='active' to='intro' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>
<Link activeClass='active' to='skills' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About</Link>
<Link activeClass='active' to='projects' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Projects</Link>
<Link activeClass='active' to='contact' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Contact</Link>
</div>

</nav>
  )
}

export default Navbar