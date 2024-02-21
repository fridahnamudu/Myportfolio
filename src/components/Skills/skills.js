import React from 'react'
import './skills.css'
import UIDesign from '../../assets/UIdesign.jpeg'
import WebsiteDesign from '../../assets/Website.jpeg'

export default function skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDesc"> My love for design fuels my work. I  blend HTML, CSS, and JavaScript to create  intuitive and visually appealing websites.
       Whether it's a sleek and modern corporate site or a vibrant and dynamic personal project, I bring ideas to life with an artistic touch.</span>

        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UI design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p> I make the user experience and user interface interesting to use and look at. Using Figma and Wix for my designs</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={WebsiteDesign} alt="Web design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>I add a touch of artistry to my work using HTML,CSS,JavaScript , PHP and React</p>
            </div>
          </div>

        </div>
      {/* </span> */}
      
        
    </section>
  )
}
