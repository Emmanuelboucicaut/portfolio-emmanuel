import "./styles.css";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Section } from "./Section";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <Nav />
        <Header />
        <Section />
      </main>
      <Footer />
    </div>
  );
}
