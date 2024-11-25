import { useState } from "react";

const initialReviews = [
  { author: "John", text: "Great film!", id: 1 },
  { author: "Alice", text: "I don't like it", id: 2 },
];

export function Form() {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const reviewsElement = reviews.map((r) => (
    <article key={r.id}>
      <strong>{r.author}</strong>
      <p>{r.text}</p>
    </article>
  ));

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    const newReview = { author, text };

    setReviews((prevReviews) => {
      return [newReview, ...prevReviews];
    });
  }

  return (
    <>
      <hr />
      <ul>{reviewsElement}</ul>
      <h2>Add review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Author</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Text</label>
          </div>
          <textarea
            name="text"
            id="text"
            placeholder="Your review"
            value={textareaValue}
            onChange={(event) => setTextareaValue(event.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue === "" || textareaValue === ""}
        >
          Submit
        </button>
      </form>
    </>
  );
}
