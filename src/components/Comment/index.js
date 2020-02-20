import React from "react";

import "./styles.css";

function Comment({ data }) {
  return (
    <div className="comment">
      <aside>
        <img src={data.author.avatar} alt="" />
      </aside>
      <main>
        <span className="author">{data.author.name}</span>
        <span className="content">{data.content}</span>
      </main>
    </div>
  );
}

export default Comment;
