import { Aa } from "./Components/AwesomeAgency/AA";
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
        <Aa />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
