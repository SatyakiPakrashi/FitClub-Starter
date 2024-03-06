import React from 'react'
import  './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import{motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
  const transition={type:'spring', duration:3}
  const mobile=window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id='home'>
    <div className='blur hero-blur' ></div>
       <div className="left-h">
       <Header/>
       <div className="the-best-ad">
        <motion.div 
        initial={{left:mobile ? "140px":'238px'}} 
        whileInView={{left:'8px'}} 
        transition={{...transition,type:'tween'}}>
        </motion.div>
        <span>The Best Fitness Club in the town</span>
       </div> 
       
       

        <div className='hero-text'>
        <div><span className="stroke-text">Shape </span>
           <span>Your </span>
           
        </div>
        <div>
        <span>Ideal Body</span>
        </div>
        
    
       
        </div> 




        <div className="figures">
       
        <div>
        <span><NumberCounter end={140} start={100} delay='4' preFix="+" /> </span>
        <span>Expert Coaches</span>
        </div>
       
        <div>
        <span><NumberCounter end={978} start={700} delay='4' preFix="+" /> </span>
        <span>Members joined</span>
        </div>
        
        <div>
        <span><NumberCounter end={50} start={20} delay='4' preFix="+" /></span>
        <span>fitness programs</span>
        </div>        
    </div> 
    
    <div className='hero-buttons'>
    <buttons className="btn">Get Started</buttons>
    <buttons className="btn">Learn More</buttons>

    </div>
 </div>
 <div className="right-h">
<buttons className="btn">Join Now</buttons>


  <motion.div
  initial={{right:"-1rem"}}
  whileInView={{right:'4rem'}}
  transition={transition}
  className="heart-rate">
   <img src={Heart} alt="" />
   <span>Heart Rate</span><span>116 bpm</span>
  
  </motion.div>
  <img src={hero_image} alt="" className="hero-image"/>
  
  <motion.img 
  
  initial={{right:"11rem"}}
  whileInView={{right:'20rem'}}
  transition={transition}
  
  src={hero_image_back} alt="" className="hero-image-back"/>

  <motion.div 
  initial={{right:"37rem"}}
  whileInView={{right:'28rem'}}
  transition={transition} 
  className="calories">
  <img src={Calories} alt="" />
  <span>Calories Burned</span><span>220kcal</span> 
  
  </motion.div>
 
 </div>   

           
    
    
    </div>


  )
}

export default Hero
