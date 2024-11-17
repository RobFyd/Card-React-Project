import { useState } from "react";

export function LikesCounter() {
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  function handleLikeButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
  }

  return (
    <>
      <h2>Likes: {numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Like it!</button>
      <button onClick={handleLoveButtonClick}>Love it!</button>
    </>
  );
}
