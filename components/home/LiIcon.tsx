'use client'

import {motion, useScroll} from "framer-motion";

interface LiIconProps {
  reference: any;
}

const LiIcon = ({ reference }: LiIconProps) => {
  const {scrollYProgress} = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });
  return (
    <figure className="absolute mt-10 left-1/2 -ml-[18px] stroke-emerald-500">
      <svg
        className=""
        width="40" height="40" viewBox="0 0 60 60"
      >
        <circle cx="50%" cy="50%" r="20" className="stroke-emerald-500 stroke-1 fill-none"/>
        <motion.circle
          style={{pathLength: scrollYProgress}}
          cx="50%" cy="50%" r="20" className="stroke-[5px] fill-white"
        />
        <circle cx="50%" cy="50%" r="10" className="stroke-1 fill-emerald-500"/>
      </svg>
    </figure>
  );
};

export default LiIcon;