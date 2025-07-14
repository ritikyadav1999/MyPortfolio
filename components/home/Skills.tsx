'use client'

import Image from "next/image";
import Link from "next/link";
import {getSkills} from "@/lib/utils";
import {motion} from "framer-motion";

const Skills = () => {
  const skills = getSkills();

  return (
    <div className="container max-w-7xl bg-emerald-50/10 w-full h-full flex flex-col gap-8">
      <h1 className="text-4xl md:text-5xl text-emerald-700 mx-auto font-light">My Skills.</h1>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 mx-auto gap-16 md:gap-24 pt-12 items-center"
      >
        {
          skills.map(({ name, url }, idx) => (
            <motion.div
              key={idx}
              initial={{y: 50 + (idx * 5), opacity: 0, scale: 1}}
              whileInView={{y: 0, opacity: 1}}
              whileHover={{scale: 1.2}}
              transition={{duration: 1, type: "spring"}}
            >
              <Link
                target="_blank"
                className="cursor-none"
                href={url}
              >
                <Image
                  width={128}
                  height={128}
                  src={`/skills/${name}.svg`}
                  alt={name}
                  className="h-20 w-20"
                />
              </Link>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  );
}
export default Skills;