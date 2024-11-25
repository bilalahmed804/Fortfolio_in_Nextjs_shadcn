
import About from "@/components/About";
import Contact from "@/components/Contect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
