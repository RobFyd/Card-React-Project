import { useState } from "react";

export function Plot() {
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(true);

  function handleShowSpoilerClick() {
    setIsSpoilerVisible(true);
    setIsWarningVisible(false);
  }

  function handleCloseWarningClick() {
    setIsWarningVisible(false);
  }

  return (
    <>
      <h2>Storyline:</h2>
      {isWarningVisible && (
        <p>
          Warning! The plot description contains spoilers!{" "}
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        In Star Wars: Episode V - The Empire Strikes Back, the Rebel Alliance
        faces a devastating attack on their base on Hoth by the Empire. Luke
        Skywalker, guided by a vision of Obi-Wan Kenobi, travels to Dagobah to
        train with Jedi Master Yoda, learning the ways of the Force.
      </p>
      {isSpoilerVisible ? (
        <p>
          Meanwhile, Han Solo, Princess Leia, and their allies evade Imperial
          forces but are ultimately betrayed by Lando Calrissian on Cloud City.
          In the film`s climactic moment, Luke confronts Darth Vader and learns
          the shocking truth: Vader is his father.
        </p>
      ) : (
        <button onClick={handleShowSpoilerClick}>Show spoiler</button>
      )}
    </>
  );
}
