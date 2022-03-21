import { Aa } from "./Components/AwesomeAgency/AA";
import { Blog } from "./Components/Blog/Blog";
import { Hero } from "./Components/Hero/Hero";
import { Nav } from "./Components/Nav/Navigation";
import { PhotoJob } from "./Components/PhotoJob/PhotoJob";


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
        <PhotoJob />
        <Blog />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
