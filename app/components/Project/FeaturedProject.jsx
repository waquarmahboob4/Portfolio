import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { GithubIcon } from '../Icons/Icons'

const FeaturedProject = ({type,title,skills,summary,img,link,github}) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
     rounded-br-2xl dark:bg-dark dark:border-light'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl"></div>
        <Link href={link} target='_blank' 
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg '>
            <Image src={img} alt={title} className='w-full h-auto' priority={true}/>
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl'>
                {type}
            </span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
            <h2 className='my-2 w-1/2 text-left text-4xl font-bold dark:text-light' >{title}  </h2>
        </Link>
        <span className='mb-2  text-left text-2xl'>{skills}</span>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} target='_blank' className='w-10' >
           <GithubIcon/>
        </Link>
        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark' >
           Visit Project
        </Link>
        </div>
        </div>
      
    </article>
  )
}

export default FeaturedProject
