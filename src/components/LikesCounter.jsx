export function LikesCounter({
  numberOfLikes,
  onLikeButtonClick,
  onLoveButtonClick,
}) {
  return (
    <>
      <h2>Likes: {numberOfLikes}</h2>
      <button onClick={onLikeButtonClick}>Like it!</button>
      <button onClick={onLoveButtonClick}>Love it!</button>
    </>
  );
}
