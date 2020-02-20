import React from "react";

import "./styles.css";

import Comment from "../Comment";

function Post({ data }) {
  return (
    <div className="post">
      <header>
        <aside>
          <img src={data.author.avatar} alt="" />
        </aside>
        <main>
          <span className="author">{data.author.name}</span>
          <span className="date">{data.date}</span>
        </main>
      </header>
      <main className="content">{data.content}</main>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default Post;
