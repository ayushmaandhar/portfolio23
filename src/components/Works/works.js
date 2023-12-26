import React from 'react';
import './works.css';
import Hita from '../../assets/hita.png';
import Plethora from '../../assets/plethora.png';
import Git from '../../assets/github.png'


const Works = () => {

  
  return (
    <section id='works'>
      <h2 className='worksTitle'> My Portfolio </h2>
      <span className='worksDesc'> I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. </span>
      <div className='worksImgs'>
        <img className='worksImg' src={Plethora} alt="Image 1" /><br></br>
        <p className='worksDesc' style={{marginBottom: '2rem'}}>An ERP for Training and Placement activities in college.</p><br></br><br></br><br></br>
        <img className='worksImg' src={Hita} alt="Image 2" />
        <p className='worksDesc'>Real Estate Deals online at the comfort of your home.</p>
      </div>
      <a href='https://github.com/ayushmaandhar' target="_blank">
        <button className='worksBtn'>See More </button>
      </a>
    </section>
  )
}

export default Works
