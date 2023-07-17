import React from 'react'
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
function Contact() {
  return (
    <div className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We are always ready to provide you the best service for you.<br/>We believe a good place can make your life better</span>
            <div className="flexColStart ContactModes">
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>call</span>
                                <span className='secondaryText'>6007008009</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>6007008009</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>

                </div>

                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video call</span>
                                <span className='secondaryText'>6007008009</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>6007008009</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>

                </div>
            </div>            
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src='./top.png' alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact