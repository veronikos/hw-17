import "./App.css";
import React from "react";
import Post from "./components/Post";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const postContent = {
  author: {
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    date: "26 fev.",
  },
  comment: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE
};

function App() {
  return (
    <Post
      author={{...postContent.author}}
      comment={postContent.comment}
      image={postContent.image}
    />
  );
}

export default App;
