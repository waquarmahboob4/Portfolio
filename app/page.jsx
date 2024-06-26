import Image from "next/legacy/image";
import Link from "next/link";
import Layouts from "./components/Layout/Layouts";
import {home} from "../constant";
import profilePic from "../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import { LinkArrow } from "./components/Icons/Icons"
import HireMe from "./components/HireMe/HireMe";
import lightBulb from "../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
      <main className="flex items-center text-dark dark:bg-dark w-full min-h-screen dark:text-light">
        <Layouts className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
               priority 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src={profilePic}
                alt="Waquar Mahboob"
                className="w-full h-auto lg:!hidden md:!inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text={home.animatedText} className="!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="mmy-4 text-base font-medium md:text-sm sm:text-xs">
                {home.text}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/Resume.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >{home.resume} <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:waquarmahboob4@gmail.com" target={"_blank"}
                className="ml-4 text-lg font capitalize text-dark underline dark:text-light md:text-base"
                >
                  {home.contact}
                </Link>
              </div>
            </div>
          </div>
        </Layouts>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:!hidden">
          <Image src={lightBulb} alt="Waquar Mahboob" className='w-full h-auto '/>
        </div>

      </main>
  );
}
