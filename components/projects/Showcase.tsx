'use client'

import Image from "next/image";
import {cn, getProjects} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/Button";
import {ArrowUpRightFromCircle, ChevronRight, Github} from "lucide-react";
import {motion} from "framer-motion";

const Showcase = () => {
  const projects = getProjects();
  return (
    projects.map(({
      title,
      description,
      name,
      theme,
      background,
      text ,
      github,
      live,
      tech,
      expandable
    }, idx) => (
      <div
        key={idx}
        className={cn("w-full h-full flex flex-col py-24 gap-8", background, text)}
      >
        <div className={cn(
          "flex flex-col items-center justify-center container max-w-7xl gap-10 md:gap-6",
          idx % 2 === 0 && 'md:flex-row',
          idx % 2 !== 0 && 'md:flex-row-reverse',
        )}>
          <motion.div
            initial={idx % 2 === 0 ? {x: -50, opacity: 0} : {x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1, type: "spring"}}
            className="w-full"
          >
            <Image
              src={`/mockups/${name}.png`}
              alt='moments'
              width={400}
              height={400}
            />
          </motion.div>

          <motion.div
            initial={idx % 2 === 0 ? {x: 50, opacity: 0} : {x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1, type: "spring"}}
            className="flex flex-col gap-4"
          >
            <h1 className={cn(
              "text-3xl md:text-4xl font-bold flex justify-center",
              {'md:justify-start': idx % 2 === 0},
              {'md:justify-end': idx % 2 !== 0},
            )}>
              {title}
            </h1>
            <p className={cn(
              "text-lg md:text-xl leading-relaxed text-center",
              {'md:text-left': idx % 2 === 0},
              {'md:text-right': idx % 2 !== 0},
            )}>
              {description}
            </p>
            {/* Tech stack badges */}
            <div className={cn(
              "flex flex-wrap gap-2 justify-center md:justify-start mt-2 mb-2"
            )}>
              {tech && tech.map((t, i) => (
                <span
                  key={i}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold shadow bg-white/80 text-gray-800 border border-emerald-200 hover:bg-emerald-100 transition-colors duration-200",
                    theme === 'blue' && 'border-blue-200 hover:bg-blue-100',
                    theme === 'orange' && 'border-orange-200 hover:bg-orange-100',
                    theme === 'pink' && 'border-pink-200 hover:bg-pink-100',
                    theme === 'emerald' && 'border-emerald-200 hover:bg-emerald-100',
                    theme === 'yellow' && 'border-yellow-200 hover:bg-yellow-100',
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
            {/* Show More button */}
            {expandable && (
              <Link
                href={`/projects/${name}`}
                className="self-center md:self-start px-4 py-1 mt-2 rounded bg-emerald-500 text-white text-sm font-medium shadow hover:bg-emerald-600 transition-colors duration-200"
                type="button"
              >
                Show More
              </Link>
            )}
            <div className={cn(
              "flex justify-center gap-2 items-center",
              {'md:justify-start': idx % 2 === 0},
              {'md:justify-end': idx % 2 !== 0},
            )}>
              <Link
                target="_blank"
                href={github} className={cn(
                  buttonVariants({ variant: theme }),
                  'cursor-none w-fit',
                )}
              >
                <Github className="mr-2 h-4 w-4 md:h-5 md:w-5"/> View on GitHub
              </Link>
              <Link
                target="_blank"
                href={live} className={cn(
                  buttonVariants({ variant: "ghost" }),
                  'cursor-none w-fit group font-medium',
                  theme === 'blue' ? 'hover:bg-blue-500/25' :
                  theme === 'orange' ? 'hover:bg-orange-500/25' :
                  theme === 'pink' ? 'hover:bg-pink-500/25' :
                  theme === 'emerald' ? 'hover:bg-emerald-500/25' :
                  theme === 'yellow' ? 'hover:bg-yellow-500/25' :
                    'hover:bg-gray-500/25'
                )}
              >
                <ArrowUpRightFromCircle className="mr-2 h-4 w-4"/> Live Demo
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition"/>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    ))
  );
};

export default Showcase;
