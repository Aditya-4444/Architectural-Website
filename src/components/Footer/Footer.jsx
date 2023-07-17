import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='F-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src='./logo1.png' alt='' width={220}/>
                <span className='secondaryText'>
                    Our Vision is to design spaces that inspire and transform lives.
                </span>
                <div className='Icons'>
                    <span><InstagramIcon/></span>
                    <span><TwitterIcon/></span>
                    <span><FacebookIcon/></span>
                    <span><PinterestIcon/></span>
                    <span><LinkedInIcon/></span>
                </div>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Building No.234  xyz Street -184694 ,INDIA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer