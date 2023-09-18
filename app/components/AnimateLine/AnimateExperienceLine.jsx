'use client'
import React,{useRef} from 'react'
import {motion,useScroll} from "framer-motion"
import LiIcon from '../LiIcon/LiIcon'


const Details =({position,company,companyLink,time,address,work})=>{
    const ref= useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl '>
                {position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}
const AnimateExperienceLine = () => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
        style={{scaleY:scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="JUNIOR SOFTWARE DEVELOPER"
                company= "SOFYRUS TECHNOLOGIES"
                companyLink="https://sofyrus.com/"
                time="FEBRUARY 2020 - SEPTEMBER 2022"
                address="Aligarh, UP"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.'
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                
                />
                <Details
                position="Tech Internship"
                company= "EazyDiner Private Limited"
                companyLink="https://eazydiner.vercel.app/"
                time="JANUARY 2023 - JULY 2023"
                address="Gurugram Haryana, UP"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.'
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                
                />
                <Details
                position="Software Developer"
                company= "EazyDiner Private Limited"
                companyLink="https://eazydiner.vercel.app/"
                time="JULY 2023-Present"
                address="Gurugram Haryana, UP"
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.'
                Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                
                />
            </ul>
        </div>
  )
}

export default AnimateExperienceLine
