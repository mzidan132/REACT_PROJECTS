import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </main>
  );
}
