import React from "react";
import Logo from "../Logo/Logo";
import {CustomLink,CustomMobileLink} from "./CustomLink";
import { GithubIcon, LinkedInIcon, Hackerrank } from "../Icons/Icons";
import CustomIcon from "./CustomIcon";
import ThemeSwitchBtn from "./ThemeSwitchBtn"
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      
        <MobileNavbar>
        <nav className="flex items-center justify-center flex-wrap mt-2">
        <CustomIcon href="https://github.com/waquarmahboob4" 
          className="mr-3 bg-light rounded-full dark:bg-dark sm:mr-1"
        >
          <GithubIcon />
        </CustomIcon>
        
        <CustomIcon href="https://www.linkedin.com/in/waquarmahboob"
          className="mx-3 sm:mx-1"
        >
          <LinkedInIcon />
        </CustomIcon>
        <CustomIcon
          href="https://www.hackerrank.com/skills-verification"
          className="ml-3 sm:ml-1"
        >
          <Hackerrank />
        </CustomIcon>
        <ThemeSwitchBtn/>
      </nav>
        </MobileNavbar>
      
      <div className="w-full flex justify-between items-center lg:hidden">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <CustomIcon href="https://github.com/waquarmahboob4" 
          className="mr-3"
        >
          <GithubIcon />
        </CustomIcon>
        
        <CustomIcon href="https://www.linkedin.com/in/waquarmahboob"
          className="mx-3"
        >
          <LinkedInIcon />
        </CustomIcon>
        <CustomIcon
          href="https://www.hackerrank.com/skills-verification"
          className="ml-3"
        >
          <Hackerrank />
        </CustomIcon>
        <ThemeSwitchBtn/>
      </nav>
      </div>
      

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
