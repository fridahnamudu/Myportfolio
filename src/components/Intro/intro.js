import React from 'react'
import './intro.css'
import bg from '../../assets/newnamudu.png'
import {Link} from 'react-scroll'
import WorkIcon from '@mui/icons-material/Work';
// import styled from '@emotion/styled';
// import { Style } from '@mui/icons-material';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import ResumePdf from '../../assets/ResumeforFridahJoyNamudu.pdf'

function intro() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'ResumeForFridahJoyNamudu';

    link.href = ResumePdf;

    link.click();
  };

  

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
            <p className="introPara"> Equipped with a firm basis in engineering concepts and a drive for long-term solutions.<br/> 
            Proven capacity to bridge the technological and engineering divides. <br/>
            I am eager to provide programming experience to develop creative and meaningful initiatives.</p>

             
            <Link><button onClick={handleDownload} className="btn"><WorkIcon/>Download CV</button></Link>
            

            

        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default intro