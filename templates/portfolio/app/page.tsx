import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <footer className="py-10 border-t border-ink/10 text-sm text-ink/50">
        Kim My Duyen Nguyen · Berlin · 2026
      </footer>
    </main>
  );
}
