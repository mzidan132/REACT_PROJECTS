import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
