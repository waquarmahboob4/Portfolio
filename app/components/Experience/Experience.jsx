import React from 'react'
import AnimateExperienceLine from '../AnimateLine/AnimateExperienceLine'


const Experience = ({experience}) => {
    
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            {experience.heading}
        </h2>
        <AnimateExperienceLine data={experience?.data}/>
        
    </div>
  )
}

export default Experience
