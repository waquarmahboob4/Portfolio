'use client'
import {motion} from "framer-motion";
const CustomIcon = ({href,className="",children})=>{
    return (
        <motion.a href={href} target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className={`w-6 ${className}`}
      >
       {children}
      </motion.a>
    )
  }

  export default CustomIcon