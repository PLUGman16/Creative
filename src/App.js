import { Hero } from "./Components/Hero/Hero";
import { Nav } from "./Components/Nav/Navigation";


function App() {
  return (
    <>
      <header>
        <nav>
          <Nav />
        </nav>
      </header>

      <main>
        <Hero />
        <label id="scroll"/>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
