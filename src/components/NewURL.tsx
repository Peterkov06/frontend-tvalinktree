import { useState } from "react";
import { addNewURL } from "../services/protectedAPI";

const NewURL = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const addURL = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(addNewURL(url, title));
    setUrl("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={addURL}>
        <label htmlFor="url">URL: </label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewURL;
