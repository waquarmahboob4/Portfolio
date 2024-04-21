import React from 'react'
import AnimateEducationLine from '../AnimateLine/AnimateEducationLine'


const Education = ({education}) => {
    
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        {education.heading}
        </h2>
        <AnimateEducationLine data={education?.data}/>
        
    </div>
  )
}

export default Education
