import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CodeWindow from "@/components/ui/CodeWindow";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:flex lg:gap-16 xl:gap-24">
      <Sidebar />
      <main className="pb-20 lg:w-[58%] lg:py-28">
        <div className="pt-12 lg:mb-14 lg:pt-0">
          <CodeWindow />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className="mt-24 border-t border-black/10 pt-6 font-mono text-xs muted dark:border-white/10">
          Built by Hunain Aslam in Karachi · Next.js &amp; Tailwind
        </footer>
      </main>
    </div>
  );
}
