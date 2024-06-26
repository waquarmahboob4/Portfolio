import Head from 'next/head'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import DarkThemeScript from './components/Script/DarkThemeScript'

const montserrat = Montserrat({ subsets: ['latin'] ,
variable:"--font-mont"})
export const metadata = {
  
  title:'Waquar Mahboob | Home Page',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <link rel="icon" href="./favicon.ico"/> 
      </Head>
      <body className={`${montserrat.className} font-mont bg-white dark:bg-dark w-full min-h-screen`}>
      <DarkThemeScript/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
