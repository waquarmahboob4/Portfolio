import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import CustomLink from "./CustomLink";
import { GithubIcon, LinkedInIcon, Hackerrank } from "../Icons/Icons";
import CustomIcon from "./CustomIcon";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <CustomIcon href="https://github.com/waquarmahboob4" 
          className="mx-3"
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
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
