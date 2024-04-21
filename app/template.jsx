'use client'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Template = ({ children }) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    setPageName(pathname);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait" >
        
          <motion.div
            key={pageName}
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%' }}
            exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
      </AnimatePresence>
      <AnimatePresence mode='wait'>
      <motion.div
       key={`${pageName}-1`}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['100%', '100%'], width: ['100%', '100%'] }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        
      />
      </AnimatePresence>
      <AnimatePresence mode='wait'>

      <motion.div
       key={`${pageName}-2`}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '0%'], width: ['0%', '0%'] }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
      </AnimatePresence>
      {children}
    </>
  );
};

export default Template;

