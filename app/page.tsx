import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <main className="max-w-7xl mx--auto sm:px-6 lg:px-8">
      <Navbar/>
      <Hero/>
    </main>
  );
}
