'use client'
import Image from 'next/image'
import {motion} from "framer-motion"

const AnimatedImages = ({src,alt,...restAtr}) => {
    
  const FramerImage=motion(Image)

   return <FramerImage src={src} alt={alt} className='w-full h-auto' {...restAtr}/>
  
}

export default AnimatedImages
