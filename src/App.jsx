import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Review";

function App() {
  return (
    <>
      <h1>Star Wars: Episode V</h1>
      <h2>Year of production: 1980</h2>
      <LikesCounter />
      <Plot />
      <Form />
    </>
  );
}

export default App;
