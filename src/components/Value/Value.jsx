import React,{useState}from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState,} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import "./Value.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'  
import data from "../../utils/accordion"
function Value() {
  return (
    <div className='V-wrapper'>
        <div className="paddings innerWidth flexCenter V-container">
            <div className="V-left">
                <div className="image-container">
                    <img src='./interior.png' alt=''/>
                </div>
            </div>
            <div className="flecColStart V-right">
                <span className='orangeText'>OUR VALUE</span><br/>
                <span className='primaryText'>Value We Give to You</span><br/>
                <span className='secondaryText'>We are always ready to help by providing the best Service <br/>
                We believe a good blace to live can make your life better </span>
            <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='Accordion'>
                {
                    data.map((item , i)=>{
                        const[className,setClassName]= useState("")
                        return(
                            <AccordionItem key={i} className={`AccordionItem ${className}`} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({expanded})=>expanded? setClassName("expanded"): setClassName("collapsed")}
                                        </AccordionItemState>
                                        <div className='flexCenter icon'>{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className={`flexCenter icon ${className}`}><MdOutlineArrowDropDown size={20}/></div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                        })
                }
            </Accordion>
            
            </div>
        </div>
    </div>
  )
}

export default Value 