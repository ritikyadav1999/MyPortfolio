'use client'

import Link from "next/link";
import {Copyright} from "lucide-react";
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <div className="inset-x-0 bg-emerald-500/30 backdrop-blur-md z-10 py-7 mt-16">
      <div className="container max-w-7xl h-full mx-auto flex flex-col items-center justify-center gap-7">
        <div className="gap-8 md:gap-16 flex text-black  text-base md:text-lg items-center">
          <motion.div
            initial={{x: -60, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1.5, type: "spring"}}
          >
            <Link
              target="_blank"
              className="hover:text-emerald-900 transition-colors cursor-none"
              href='https://github.com/ritikyadav1999'
            >
              Github
            </Link>
          </motion.div>

          <motion.div
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1, type: "spring"}}
          >
            <Link
              target="_blank"
              className="hover:text-emerald-900 transition-colors cursor-none"
              href='https://www.linkedin.com/in/ritikyadav1999/'
            >
              LinkedIn
            </Link>
          </motion.div>

          <motion.div
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1, type: "spring"}}
          >
            <Link
              target="_blank"
              className="hover:text-emerald-900 transition-colors cursor-none"
              href='/'
            >
              Threads
            </Link>
          </motion.div>

          <motion.div
            initial={{x: 60, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1.5, type: "spring"}}
          >
            <Link
              target="_blank"
              className="hover:text-emerald-900 transition-colors cursor-none"
              href='/'
            >
              Twitter
            </Link>
          </motion.div>

        </div>
        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1, type: "spring"}}
          className="font-serif mx-auto text-xs text-emerald-600 flex items-center"
        >
          <Copyright size={12}/>
          2023&nbsp;
          <Link
            href={'/'}
            className="underline underline-offset-2 hover:text-emerald-900 transition-colors cursor-none"
          >
            Ritik Yadav
          </Link>.
          All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;