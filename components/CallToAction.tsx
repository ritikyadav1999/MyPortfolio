'use client'

import Link from "next/link";
import {buttonVariants} from "@/components/ui/Button";
import {Mail} from "lucide-react";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";

const CallToAction = () => {
  return (
    <div className="container max-w-7xl bg-emerald-50/10 w-full h-full flex flex-col">
      <motion.h1
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="text-4xl md:text-5xl text-emerald-700 mx-auto font-light"
      >
        Get In Touch.
      </motion.h1>
      <motion.h4
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="text-emerald-500 text-xl md:text-2xl mx-auto font-light mt-8 text-center"
      >
        If you&apos;re someone who loves turning ideas into impactful, scalable solutions—let’s build together.
      </motion.h4>
      <motion.p
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="mt-4 text-black text-base md:text-lg mx-auto max-w-lg tracking-wide text-center font-serif leading-relaxed"
      >
        I love collaborating with curious minds to bring bold ideas to life through code, design, and smart systems.
      </motion.p>
      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="mt-8 mx-auto"
      >
        <Link
          target="_blank"
          href='mailto:me.ritik.yadav@gmail.com'
          className={cn('cursor-none', buttonVariants())}
        >
          <Mail className="mr-2 h-4 w-4" /> MESSAGE ME
        </Link>
      </motion.div>
    </div>
  );
}
export default CallToAction;