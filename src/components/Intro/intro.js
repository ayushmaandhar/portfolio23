import React from 'react'
import './intro.css'
import Me from './../../assets/itMe.png'
import btnImg from './../../assets/hireme.png'
import { Link } from 'react-scroll'
import { useTypewriter} from 'react-simple-typewriter'
import { Cursor } from 'react-simple-typewriter'
import ResumeDownloadButton from './resumeDownloadButton'


const Intro = () => {

  const [text] = useTypewriter({
    words: ['Developer.', 'Designer.'],
    loop: true,
  });

  return (
    <section id='intro'>
      <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm
                <span className='introName'> Ayushmaan, </span><br/>
                Website 
                <div style={{color: 'yellow'}}>
                {text}<Cursor />
                </div>
            </span>
            <p className='introPara' > 
            I am a skilled Web Developer with experience in creating <br/> Robust, Visually Appealing and User Friendly Websites.
            </p>
              <Link>
                <button className='btn' >
                    <img className='btnImg' src={btnImg} />
                    Hire Me
                </button>
              &nbsp;
            <ResumeDownloadButton/>
            </Link>
            
      </div>
      <img src={Me} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
