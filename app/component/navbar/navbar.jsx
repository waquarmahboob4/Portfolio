import Image from 'next/image';
import styles from '../../page.module.css'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div style={{display:'flex'}}>

    <Link href={`/`}>
            <div className="padding-0 bucket h-100 pointer">
                <div className="item-title bg-white radius-8 padding-10 text-center">
                    <span className="bold grey-dark bucket_name font-14">Home</span>
                </div>
            </div>
          </Link>
          <Link href={`/about`}>
            <div className="padding-0 bucket h-100 pointer">
               
                <div className="item-title bg-white radius-8 padding-10 text-center">
                    <span className="bold grey-dark bucket_name font-14">About</span>
                </div>
            </div>
          </Link>
          <Link href={`/contact`}>
            <div className="padding-0 bucket h-100 pointer">
                
                <div className="item-title bg-white radius-8 padding-10 text-center">
                    <span className="bold grey-dark bucket_name font-14">Contact</span>
                </div>
            </div>
          </Link>

          </div>


  )}