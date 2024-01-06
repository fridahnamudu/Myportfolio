import React from 'react'
import './intro.css'
import bg from '../../assets/Me3.png'
import {Link} from 'react-scroll'
import WorkIcon from '@mui/icons-material/Work';
import styled from '@emotion/styled';
import { Style } from '@mui/icons-material';
import { Typewriter, Cursor } from 'react-simple-typewriter';

function intro() {
  // const [text] = useTypewriter({
  //   words: ['Front-End developer', 'Student Engineer', 'Website designer'],
  //   loop: [],
  // });
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Namudu</span><br /> <Typewriter words={['Front-End developer', 'Student Engineer', 'Website designer']}
            loop={4}
            typeSpeed={70}/>
            <Cursor
            cursorStyle='<'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed ={1000}
            
          /></span>
            <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Perferendis a consectetur, voluptatum iure est dolorem quasi dolore placeat,<br/> ut nam molestias 
            totam aspernatur neque esse praesentium ea, labore vero dolores?</p>
            <Link><button className="btn"><WorkIcon/>Hire Me</button></Link>
            

        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default intro