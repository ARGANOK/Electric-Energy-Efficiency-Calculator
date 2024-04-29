import React from "react";
import { useState } from "react";
import './section-1.css'
import image from '../images/Section-1-image.png'
import TypeWriterEffect from './typewriterEffect.jsx'
import NavigationBar from './navBar.jsx';
import AboutUs from "./Footer.jsx";


export default function     firstSection() {
    return(<div className=" bg-[url(../images/Moving-Background-2.gif)] ">
        <NavigationBar  />

        <div className=" flex flex-row-reverse justify-between  items-center mb-64">
            <div className="section-box">
                <div className="mainBody">
                    <div className="imageSection">
                    <img src={image} alt="" className=" h-[20rem] rounded mr-10 mt-10 " />
                    </div>
                    <div className="slider">
                        <div >To Know More Get the link of full article</div>
                        {/* https://www.daftlogic.com/information-appliance-power-consumption.htm */}

                    </div>
                </div>
            </div>
            <div className=" ml-[3rem]">
        <TypeWriterEffect />
      </div>            
        </div>
        <AboutUs />
        </div>
    )
}