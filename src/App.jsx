import { useState } from "react";

const initialState = {
  isSpoilerVisible: false,
  isWarningVisible: true,
  numberOfLikes: 0,
};

function App() {
  const [state, setState] = useState(initialState);

  function handleShowSpoilerClick() {
    setState((prevState) => ({
      ...prevState,
      isWarningVisible: false,
      isSpoilerVisible: true,
    }));
  }

  function handleCloseWarningClick() {
    setState((prevState) => ({ ...prevState, isWarningVisible: false }));
  }

  function handleLikeButtonClick() {
    setState((prevState) => ({
      ...prevState,
      numberOfLikes: prevState.numberOfLikes + 1,
    }));
  }

  function handleLoveButtonClick() {
    setState((prevState) => ({
      ...prevState,
      numberOfLikes: prevState.numberOfLikes + 3,
    }));
  }

  return (
    <>
      <h1>Star Wars: Episode V</h1>
      <h2>Year of production: 1980</h2>
      <h2>Likes: {state.numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Like it!</button>
      <button onClick={handleLoveButtonClick}>Love it!</button>
      <h2>Storyline:</h2>
      {state.isWarningVisible && (
        <p>
          Warning! The plot description contains spoilers!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        In Star Wars: Episode V - The Empire Strikes Back, the Rebel Alliance
        faces a devastating attack on their base on Hoth by the Empire. Luke
        Skywalker, guided by a vision of Obi-Wan Kenobi, travels to Dagobah to
        train with Jedi Master Yoda, learning the ways of the Force.
      </p>
      {state.isSpoilerVisible ? (
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

export default App;
