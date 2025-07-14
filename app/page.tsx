import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Divider from "@/components/Divider";
import Education from "@/components/home/Education";
import Skills from "@/components/home/Skills";

const Home = () => {
  return (
    <>
      <Hero />

      <Intro />

      <Divider className="text-gray-200 py-16"/>

      <Education />

      <Divider className="text-gray-200 py-16"/>

      <Skills />

      <Divider className="text-gray-200 py-16"/>

    </>
  )
}
export default Home;
