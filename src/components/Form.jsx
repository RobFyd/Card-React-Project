import { useState } from "react";

export function Form() {
  const [review, setReview] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    setReview({ author, text });
  }

  return (
    <>
      {review && (
        <article>
          <strong>{review.author}</strong>
          <p>{review.text}</p>
        </article>
      )}
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
