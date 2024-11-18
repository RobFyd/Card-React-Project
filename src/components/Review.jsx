import { useState } from "react";

export function Review() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Review submitted");
  }

  return (
    <>
      <h2>Add review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Author</label>
          </div>
          <input type="text" name="author" id="author" />
        </div>
        <div>
          <div>
            <label htmlFor="text">Text</label>
          </div>
          <textarea name="text" id="text" placeholder="Your review"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
