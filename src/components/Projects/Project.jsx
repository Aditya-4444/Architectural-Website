import React, { useState } from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
import "./Project.css"
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common.js'
// import Zoom from "../ZoomIn/Zoom"
import "../ZoomIn/Zoom.css"
import OutsideClickHandler from "react-outside-click-handler"
import { sliderSize } from '../../utils/info';
function Project() {
    const[play, setPlay] = useState(false)
    const[index, setIndex] = useState("")
    const change=(k)=>{
        setPlay(!play)
        setIndex(k)
        console.log(k)
    }
    function truncateContent(content) {
      if (content.length > 50) {
        return content.substring(0, 100) + "...";
      } else {
        return content;
      }
    }
  return (
    <div className='P-wrapper'>
        <div className='paddings innerWidth P-container'>
            <div className='r-head'>
                <span className='orangeText'>Best Choices</span>
                <span className='PrimaryText'>Popular Recidencies</span>
            </div>
            <Swiper {...sliderSettings}>
            <SliderButtons /> 
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>  
                            <div className='flexColStart r-card'onClick={()=>change(i)}>
                                <img src={card.image} alt='' height={180}/>
                                <span className="secondaryText P-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{truncateContent(`${card.detail}`)}</span>
                            </div>
                        </SwiperSlide>
                    ))
                } 
            </Swiper>
        </div>
        {/* <OutsideClickHandler onOutsideClick={()=>setPlay(false)}>
        { play &&(<Swiper {...sliderSize} className='position'>{
          data[index].book.map((cards,i)=>(  
            <SwiperSlide key={i}>
          <Zoom src={cards.img} details={data[index].name}/>
          </SwiperSlide>
          ))}
          </Swiper>
          )
        }
        </OutsideClickHandler> */}
        <OutsideClickHandler onOutsideClick={() => setPlay(false)}>
  {play && (
    <div className='position'>
      <div className='Z-wapper'>
        <div className='Z-container'>
          <Swiper {...sliderSize}>
            {data[index].book.map((cards, i) => (
              <SwiperSlide key={i}>
                <img src={cards.img} alt='' className='swiperImage'/>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className='cross' onClick={() => setPlay(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  )}
</OutsideClickHandler>
    </div>
  )
};

export default Project;

const SliderButtons=()=>{
    const swiper= useSwiper();
    return(
        <div className='r-buttons'>
            <button onClick={()=>swiper.slidePrev()}> &lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>

        </div>
    )
}