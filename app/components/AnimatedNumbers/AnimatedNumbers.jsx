'use client'

import {useSpring, useInView, useMotionValue } from "framer-motion"
import { useEffect, useRef } from "react"

const AnimatedNumbers = ({value}) => {
    const ref=useRef(null)
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000})
    const isInview = useInView(ref,{once:true})


    useEffect(() => {
      if(isInview) {
        motionValue.set(value);
      }
    }, [isInview,value,motionValue])

    useEffect(() => {
      springValue.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
        console.log(latest)
      })
    }, [springValue,value])
    
    return <span ref={ref}></span>
  
}

export default AnimatedNumbers
