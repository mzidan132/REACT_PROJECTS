"use client"
import React from 'react';
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Onscroll = () =>{
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return(
    <>
   
    <div data-aos="fade-right">
      <div style={{width:90,backgroundColor:'red'}}></div>
    </div>
    <div style={{width:90,backgroundColor:'red'}}></div>
    </>
  );
}
export default Onscroll