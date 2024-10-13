import React, { useState } from "react";
import { Likes } from "./likes";

export const Answer = (props) => {
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");
  return (
    <>
      <p>{props.answer}</p>
      <Likes />
      {comment !== "" && <p>{comment}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setComment(input);
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add comment</button>
      </form>
    </>
  );
};
