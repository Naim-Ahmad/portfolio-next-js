import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
