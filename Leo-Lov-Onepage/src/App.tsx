import { Navbar } from "./components/nav/nav.tsx";
import { Header } from "./components/header/header.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { Card } from "./components/card/card.tsx";
import { Main } from "./components/main/main.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card
        cardOverskrift="Familieret"
        cardText="Familieret er en ret alle har.
            Har du en familie har du
            sikkert ret til familieret.
            Medmindre du altid er den
            der tror du har ret. Så kan
            vi desværre ikke hjælpe
            dig."
      />
      <Card
        cardOverskrift="Ejendomsret"
        cardText="Har du købt et hus og
            fortrudt eller er du blevet
            svindlet? Fortvivl ej. Vi kan
            hjælpe dig med at komme
            af med huset, eller
            eventuelt sagsøge
            vedkommende der solgte
            dig det."
      />
      <Card
        cardOverskrift="Konkurs"
        cardText="Er du gået konkurs ville vi
          rigtig gerne hjælpe, men
          det kan vi desværre ikke. Vi
          er alle advokater med fede
          biler her så har du ingen
          penge får du ingen hjælp"
      />
      <Card
        cardOverskrift="Selskabsret"
        cardText="Selskabsret. Ved du heller
          aldrig hvilken ret du skal
          servere til et stort selskab?
          Heller ikke os. Heldigvis har
          vi en mand i udlandet der
          ved en masse om dette så
          henvend dig i dag."
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
