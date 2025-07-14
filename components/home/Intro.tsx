"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="container max-w-7xl bg-emerald-50/25 w-full h-full flex flex-col pt-16 gap-8">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <Image
          width={512}
          height={512}
          src="/images/profile_ritik.png"
          alt="profile photo"
          className="w-52 mx-auto"
        />
      </motion.div>

      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-emerald-500 text-2xl md:text-3xl mx-auto font-light"
      >
        Hello.
      </motion.h3>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-gray-500 text-base md:text-lg mx-auto max-w-4xl tracking-wide text-center font-serif leading-relaxed"
      >
        I’m Ritik Yadav, a passionate Application Developer currently working at
        IBM, with a B.Tech in Information Technology from VIT Vellore. I
        specialize in building robust, scalable, and user-friendly applications
        across both frontend and backend systems. With a strong foundation in
        software engineering and problem-solving, I’ve worked across the stack
        using technologies like Angular, Next.js, Node.js, Express, MongoDB,
        PostgreSQL, and Redis. I’m skilled in architecting systems with clean
        code practices, RESTful APIs, authentication systems, and cloud
        deployments. I also enjoy working with AI models (LLMs), integrating
        tools like GROQ and OpenRouter to bring intelligent automation to
        real-world applications. My areas of interest include AI-powered product
        development, scalable backend systems, DevOps, and mobile-first design.
        Whether I’m building a full-fledged MVP, improving system performance,
        or collaborating in agile teams, I bring a balance of engineering depth
        and product thinking to every project. I am driven by curiosity,
        creativity, and the desire to build things that truly make an impact.
        Always learning, always building.
      </motion.p>
    </div>
  );
};
export default Intro;
