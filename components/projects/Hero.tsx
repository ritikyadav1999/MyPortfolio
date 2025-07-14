'use client'

import {Sacramento} from 'next/font/google'
import {cn} from "@/lib/utils";
import Birds from "@/components/projects/Birds";
import Waves from "@/components/projects/Waves";
import {motion} from "framer-motion";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
})

const Hero = () => {
  return (
    <div className="pt-24 bg-emerald-700/10 w-full h-full flex flex-col">
      <motion.h1
        initial={{y: -50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className={cn("text-7xl md:text-8xl text-emerald-500 flex justify-center", sacramento.className)}
      >
        Projects .
      </motion.h1>

      <Birds />

      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="pt-6"
      >
        <Waves />
      </motion.div>

    </div>
  );
};

export default Hero;
