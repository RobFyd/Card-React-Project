// import "./App.css";
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
  const [isLikesVisible, setIsLikesVisible] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  function handleLikeButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
  }

  return (
    <div className="card">
      <h1>Star Wars: Episode V</h1>
      <h2>Year of production: 1980</h2>
      <button
        onClick={() => {
          setIsLikesVisible((prevIsLikesVisible) => !prevIsLikesVisible);
        }}
      >
        {isLikesVisible ? "Hide" : "Show"} likes
      </button>
      {isLikesVisible && (
        <LikesCounter
          numberOfLikes={numberOfLikes}
          onLikeButtonClick={handleLikeButtonClick}
          onLoveButtonClick={handleLoveButtonClick}
        />
      )}
      <Plot />
      <Reviews reviews={reviews} />
      <Form
        onReviewSubmit={(author, text) => {
          setReviews((prevReviews) => {
            return [
              { author, text, id: prevReviews.length + 1 },
              ...prevReviews,
            ];
          });
        }}
      />
    </div>
  );
}

export default App;
