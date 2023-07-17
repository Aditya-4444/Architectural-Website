import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BiMenuAltRight} from "react-icons/bi"
import "./Header.css"
import OutsideClickHandler from "react-outside-click-handler"

function Header() {
  const [menuOpen,setMenuOpen]= useState(false)
  console.log(menuOpen)
  const handleClick = (X) =>()=> {
    window.scrollBy(0, X)
  }
  return (
    <div className='Header'>
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth container'>
            <img src='./logo1.png' alt='logo' width={250}/>
            <OutsideClickHandler onOutsideClick={()=>setMenuOpen(false)}>
            <div className={menuOpen? "flexCenter h-menuu":"h-menu h-menu-new" }>
                {/* <Link to="/Residiences">Residiences</Link>
                <Link to="">Our value</Link>
                <Link to="">Contact Us</Link>
                <Link to="">Get Started</Link>
                <button className='button'>
                <Link to="">Contact</Link>
                </button> */}              
                <span onClick={handleClick(1000)}>Projects</span>
                <span onClick={handleClick(1750)}>Our value</span>
                <span onClick={handleClick(2450)}>Contact Us</span>
                <span onClick={handleClick(2950)}>Get Started</span>
                <button className='button'>
                <a href ="">Contact</a>
                </button>
 
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Header