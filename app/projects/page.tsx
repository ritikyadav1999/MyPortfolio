import Hero from "@/components/projects/Hero";
import Showcase from "@/components/projects/Showcase";
import Intro from "@/components/projects/Intro";

export const metadata = {
  title: 'Ritik Yadav - Projects',
  description: 'A list of projects made by Ritik Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ritikyadav.vercel.app',
    title: "Aritra Bose - Projects",
    siteName: 'Aritra Bose',
    description: "A list of projects made by Ritik Yadav",
    images: [
      {
        url: 'icon.svg',
        width: 256,
        height: 256,
      }
    ],
  },
  twitter: {
    title: "Ritik Yadav - Projects",
    description: "A list of projects made by Ritik Yadav",
    card: "summary_large_image",
    images: [
      {
        url: 'apple-icon.png',
        width: 256,
        height: 256,
      }
    ],
  }
}

const Projects = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Showcase />
      <div className="h-24"/>
    </>
  )
}
export default Projects;
