import { useState } from "react";
import { Review } from "./Review";

const initialReviews = [
  { author: "John", text: "Great film!", id: 1 },
  { author: "Alice", text: "I don't like it", id: 2 },
];

export function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);

  const reviewsElement = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  return <ul>{reviewsElement}</ul>;
}
