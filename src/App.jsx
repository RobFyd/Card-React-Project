import { ButtonStrong } from "./components/ButtonStrong";

function App() {
  // event handlers should be defined inside the component
  const buttonEl = (
    <button
      onClick={() => {
        alert("Darth Vader is Luke Skywalker’s father!");
      }}
    >
      Show spoiler
    </button>
  );

  return (
    <>
      <h1>Star Wars: Episode V</h1>
      <h2>Year of production: 1980</h2>
      <h2>Storyline:</h2>
      <p>
        In Star Wars: Episode V - The Empire Strikes Back, the Rebel Alliance
        faces a devastating attack on their base on Hoth by the Empire. Luke
        Skywalker, guided by a vision of Obi-Wan Kenobi, travels to Dagobah to
        train with Jedi Master Yoda, learning the ways of the Force.
      </p>
      {buttonEl}
      <ButtonStrong onClick={() => alert("STRONG spoiler")}>
        Show STRONG spoiler
      </ButtonStrong>
      <ButtonStrong onClick={() => alert("second STRONG spoiler")}>
        Show STRONG spoiler
      </ButtonStrong>
      <p>
        Meanwhile, Han Solo, Princess Leia, and their allies evade Imperial
        forces but are ultimately betrayed by Lando Calrissian on Cloud City. In
        the film`s climactic moment, Luke confronts Darth Vader and learns the
        shocking truth: Vader is his father.
      </p>
    </>
  );
}

export default App;
