'use client'
import Link from "next/link";
import {usePathname,useRouter} from 'next/navigation'
export const CustomLink = ({href,title,className=""})=>{
    const pathname = usePathname();
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
  
        <span className={`h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname=== href ? 'w-full':'w-0'}
        dark:bg-light`}>
          &nbsp;
        </span>
      </Link>
    )
  }

  

  export const CustomMobileLink = ({href,title,className="",toggle})=>{
    const router=useRouter();
    const pathname = usePathname();
    const routePage = ()=>{
      toggle();
      router.push(href)

    }
    return (
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={routePage}>
        {title}
  
        <span className={`h-[1px] inline-block bg-light
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname=== href ? 'w-full':'w-0'}
        dark:bg-dark`}>
          &nbsp;
        </span>
      </button>
    )
  }
