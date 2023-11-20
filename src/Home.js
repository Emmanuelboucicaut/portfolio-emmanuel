import "./styles.css";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Section } from "./Section";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Nav />
        <Header />
        <Section />
      </main>
      <Footer />
    </div>
  );
}
