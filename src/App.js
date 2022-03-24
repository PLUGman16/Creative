import { Aa } from "./Components/AwesomeAgency/AA";
import { Blog } from "./Components/Blog/Blog";
import { Hero } from "./Components/Hero/Hero";
import { Nav } from "./Components/Nav/Navigation";
import { Phone } from "./Components/Phone/Phone";
import { PhotoJob } from "./Components/PhotoJob/PhotoJob";
import { Team } from "./Components/Team/Team";


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
        <Phone />
        <Team />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
