'use client'
import { useState } from "react";
import {CustomMobileLink} from "../Navbar/CustomLink";
import {motion} from 'framer-motion'

const MobileNavbar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
    <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen?'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen?'opacity-0':'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
    </button>
    {isOpen ?<motion.div initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1,x:"-50%",y:"-50%"}} className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
    <nav className="flex flex-col justify-center items-center">
      <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
      <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
      <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
    </nav>

    {children}
    </motion.div>:''}
    </>
  );
};

export default MobileNavbar;
