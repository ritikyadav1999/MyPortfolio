'use client'

import {motion, useScroll} from "framer-motion";
import {useRef} from "react";
import LiIcon from "@/components/home/LiIcon";
import Image from "next/image";
import {cn, getEducation} from "@/lib/utils";

interface DetailProps {
  degree: string;
  year: string;
  school: string;
  location: string;
  image: string;
  dept?: string;
  idx: number;
}

const Detail = ({degree, year, school, location, image, dept, idx}: DetailProps) => {
  const listRef = useRef(null);
  return (
    <li ref={listRef} className="my-8 last:mb-0 w-full mx-auto">
      <LiIcon reference={listRef}/>
      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="grid grid-cols-2 gap-16 md:gap-36 items-center"
      >
        <div className={cn(
          "flex flex-col text-right",
          idx % 2 === 0 && "order-last text-left"
        )}>
          <h3 className="font-medium text-emerald-500 text-sm md:text-2xl">
            {degree}
          </h3>
          <p className="uppercase text-xs md:text-base text-gray-400">
            {dept}
          </p>
          <span className="font-light text-xs md:text-base text-gray-500 truncate">
            {year} | {school}
          </span>
          <p className="font-light text-xs md:text-sm w-full truncate">
            {location}
          </p>
        </div>

        <div className={cn(
          "flex",
          idx % 2 === 0 && "justify-end"
        )}>
          <Image
            src={image}
            alt='education'
            width={128}
            height={128}
            className="w-24 md:w-36"
          />
        </div>

      </motion.div>
    </li>
  )
}

const Education = () => {
  const scrollRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: scrollRef,
    offset: ["start end", "center start"]
  });

  const items = getEducation();

  return (
    <div className="container max-w-7xl bg-emerald-50/25 w-full h-full flex flex-col gap-8">
      <h1 className="text-4xl md:text-5xl text-emerald-700 mx-auto font-light">My Education.</h1>
      <div className="mx-auto relative">
        <div
          className="absolute left-1/2 top-20 w-1 h-3/4 bg-emerald-100 origin-top"
        />
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-1/2 top-20 w-1 h-3/4 bg-emerald-500 origin-top"
        />

        <ul ref={scrollRef} className="w-full flex flex-col gap-3 items-center justify-between">
          {
            items.map(({ degree, year, school, location, image, dept }, idx) => (
              <Detail
                key={idx}
                idx={idx}
                degree={degree}
                year={year}
                school={school}
                location={location}
                image={image}
                dept={dept}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default Education;