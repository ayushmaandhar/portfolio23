import React from 'react';
import './skills.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I do </span>
        <span className='skillDesc'> I am Skilled and Passionate Web Designer with Experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as in MERN Stack and SpringBoot.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Fullstack Web Dev</h2>
                    <p> I am experienced in MERN stack, Django, and SpringBoot.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I like to play with Design on Figma and CSS.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Data Analytics</h2>
                    <p>I am fond of Data and i love to use Python, PowerBI, and Tableu to Analyse it.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills;
