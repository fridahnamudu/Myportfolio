import React from 'react'
import './skills.css'
import UIDesign from '../../assets/UIdesign.jpeg'
import WebsiteDesign from '../../assets/Website.jpeg'

export default function skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quia adipisci modi culpa autem officiis, doloremque assumenda aliquam recusandae. Facilis et at 
        ea suscipit vel molestiae enim iste corrupti doloremque.</span>

        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UI design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>This is a demo text</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={WebsiteDesign} alt="Web design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>Rhis is a demo text</p>
            </div>
          </div>

        </div>
      {/* </span> */}
      
        
    </section>
  )
}
