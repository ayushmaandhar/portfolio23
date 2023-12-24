import React from 'react';
import './skills.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I do </span>
        <span className='skillDesc'> I am Skilled and Passionate Web Designer with Experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p> this is a demo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p> this is a demo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p> this is a demo text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills;
