'use client';

import { getProjects } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Birds from '@/components/projects/Birds';
import Waves from '@/components/projects/Waves';
import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
});

interface ProjectPageProps {
  params: { projectName: string };
}

// Helper to render paragraphs and lists
function renderStructuredText(text: string) {
  const blocks = text.split('\n\n');
  return blocks.map((block, idx) => {
    const lines = block.split('\n').filter(Boolean);
    // If all lines start with '-', render as a list
    if (lines.length > 1 && lines.every(line => line.trim().startsWith('-'))) {
      return (
        <ul key={idx} className="list-disc pl-8 mb-6 text-lg md:text-xl text-gray-700">
          {lines.map((line, i) => (
            <li key={i}>{line.replace(/^[-\s]+/, '')}</li>
          ))}
        </ul>
      );
    }
    // Otherwise, render as paragraph(s)
    return lines.map((line, i) => (
      <p key={i} className="mb-6 text-lg md:text-xl text-gray-700">{line}</p>
    ));
  });
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = getProjects().find(p => p.name === params.projectName);
  if (!project) return notFound();

  // Dynamic color classes
  const themeText =
    project.theme === 'blue' ? 'text-blue-500' :
    project.theme === 'orange' ? 'text-orange-500' :
    project.theme === 'pink' ? 'text-pink-500' :
    project.theme === 'emerald' ? 'text-emerald-500' :
    project.theme === 'yellow' ? 'text-yellow-500' :
    'text-emerald-500';
  const heroBg =
    project.theme === 'blue' ? 'bg-blue-700/10' :
    project.theme === 'orange' ? 'bg-orange-700/10' :
    project.theme === 'pink' ? 'bg-pink-700/10' :
    project.theme === 'emerald' ? 'bg-emerald-700/10' :
    project.theme === 'yellow' ? 'bg-yellow-700/10' :
    'bg-emerald-700/10';

  return (
    <>
      {/* Dynamic Hero Section */}
      <div className={cn('relative w-full min-h-[90vh] h-[90vh] flex flex-col justify-center items-center', heroBg)}>
        <div className="flex flex-col justify-center items-center h-full w-full absolute top-0 left-0 right-0 bottom-0 z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className={cn('text-7xl md:text-8xl flex justify-center text-center', themeText, sacramento.className)}
          >
            {project.title}
          </motion.h1>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
            className="text-lg md:text-2xl font-light text-center text-gray-600 mt-8 mb-4 max-w-3xl mx-auto"
          >
            {project.description}
          </motion.h2>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-0">
          <Birds />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="pt-6"
          >
            <Waves />
          </motion.div>
        </div>
      </div>

      {/* Tech stack badges below hero */}
      <div className="container max-w-4xl mx-auto flex flex-wrap gap-3 mb-10 mt-8">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className={cn(
              'px-5 py-2 rounded-full text-lg font-bold shadow bg-white/90 text-gray-800 border border-emerald-200 hover:bg-emerald-100 transition-colors duration-200',
              project.theme === 'blue' && 'border-blue-200 hover:bg-blue-100',
              project.theme === 'orange' && 'border-orange-200 hover:bg-orange-100',
              project.theme === 'pink' && 'border-pink-200 hover:bg-pink-100',
              project.theme === 'emerald' && 'border-emerald-200 hover:bg-emerald-100',
              project.theme === 'yellow' && 'border-yellow-200 hover:bg-yellow-100',
            )}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1, type: 'spring' }}
        className={cn('container max-w-4xl mx-auto py-16 flex flex-col gap-10')}
      >
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <div
            className={cn(
              "prose prose-lg max-w-none",
              project.theme === "blue" && "prose-headings:text-blue-500",
              project.theme === "orange" && "prose-headings:text-orange-500",
              project.theme === "pink" && "prose-headings:text-pink-500",
              project.theme === "emerald" && "prose-headings:text-emerald-500",
              project.theme === "yellow" && "prose-headings:text-yellow-500"
            )}
            dangerouslySetInnerHTML={{ __html: project.fullExplanation }}
          />
        </motion.section>
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1, type: 'spring', delay: 0.2 }}
        >
          <h2 className={cn('text-3xl font-semibold mb-4', themeText)}>Project Walkthrough Video</h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={project.videoUrl}
              title="Project Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default ProjectPage; 