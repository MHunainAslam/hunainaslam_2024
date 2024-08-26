import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Conatct from "@/components/Contact";
import Myresume from "@/components/Myresume";
import DisplayProjects from "@/components/projects/DisplayProjects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutme />
      <Myresume />
      <Skills />
      <DisplayProjects />
      <Conatct />
    </main>
  );
}
