import { useState } from "react";

function App() {
  const isSpoilerVisibleState = useState(false);
  console.log(isSpoilerVisibleState);

  let isSpoilerVisible = isSpoilerVisibleState[0];
  const setIsSpoilerVisible = isSpoilerVisibleState[1];

  function handleClick() {
    setIsSpoilerVisible(true);
    console.log("isSpoilerVisible");
  }

  console.log("App render");

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
      <button onClick={handleClick}>Show spoiler</button>
      {isSpoilerVisible && (
        <p>
          Meanwhile, Han Solo, Princess Leia, and their allies evade Imperial
          forces but are ultimately betrayed by Lando Calrissian on Cloud City.
          In the film`s climactic moment, Luke confronts Darth Vader and learns
          the shocking truth: Vader is his father.
        </p>
      )}
    </>
  );
}

export default App;
