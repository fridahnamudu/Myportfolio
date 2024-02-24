import React from 'react'
import './intro.css'
import bg from '../../assets/namudu.png'
import {Link} from 'react-scroll'
import WorkIcon from '@mui/icons-material/Work';
import styled from '@emotion/styled';
import { Style } from '@mui/icons-material';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const PDF_FILE_URL = 'http://localhost:3000/ResumeforFridahJoyNamudu.pdf'

function intro() {
  const downloadFileAtURL =(url) =>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();

  }
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
            <p className="introPara"> Equipped with a firm basis in engineering concepts and a drive for long-term solutions.<br/> 
            Proven capacity to bridge the technological and engineering divides. <br/>
            I am eager to provide programming experience to develop creative and meaningful initiatives.</p>
             
            <Link><button className="btn"  onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}><WorkIcon/>Download CV</button></Link>
            

        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default intro