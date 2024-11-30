import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Form";
import { Reviews } from "./components/Reviews";
import { useState } from "react";

const initialReviews = [
  { author: "John", text: "Great film!", id: 1 },
  { author: "Alice", text: "I don't like it", id: 2 },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);

  return (
    <>
      <h1>Star Wars: Episode V</h1>
      <h2>Year of production: 1980</h2>
      <LikesCounter />
      <Plot />
      <Reviews reviews={reviews} />
      <Form />
    </>
  );
}

export default App;
