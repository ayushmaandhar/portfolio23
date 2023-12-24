import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';

const works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'> My Portfolio </h2>
      <span className='worksDesc'> I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. </span>
      <div className='worksImgs'>
        <img src={Portfolio1} className='worksImg'/>
        <img src={Portfolio2} className='worksImg'/>
      </div>
      <button className='worksBtn'>See More</button>
    </section>
  )
}

export default works
