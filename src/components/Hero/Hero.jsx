import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup"

function Hero() {
  return (
    <div className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>

            <div className='flexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle'></div>
                <h1>
                    Always<br/> On <br/>Point 
                </h1>    
                </div>        
                <div className='flexColStart hero-des'>
                    <span className='secondaryText'>Designing the Future, Crafting Architecture</span>
                    <span className='secondaryText'>Experience Architectural Mastery: Redefining Spaces, Inspiring Possibilities</span>
                </div>
                <div className='flexCenter searchBar'>
                   <HiLocationMarker color="var(--blue)" size={25}/>
                   <input type='text'/>
                   <button className='button'>Search</button>
                </div>
                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={70} end={150} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                           Team Members
                        </span>
                    </div>
 
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={200} end={350} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp end={25}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Project Count
                        </span>
                    </div>


                </div>
            </div>
            <div className='flexCenter hero-right'>
                <div className='image-container'>
                    <img src='./pic.png' alt=''/>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Hero