import React, { useEffect, useState } from "react";

const PostDetails = (props) => {
  const { post } = props;
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    setActive(post && post.id);
  }, [post]);

  return (
    <div className={isActive ? "postDetails" : "hide"}>
      <div className="detailHeader">
        <div className="postName">{post.name}</div>
      </div>
      <div className="detailBody">
        <label>Title </label>
        <div className="item">{post.title}</div>
        <label>Display name: </label>
        <div className="item">{post.display_name}</div>
        <label>Author : </label>
        <div className="item">{post.author}</div>
        <label>URL </label>
        <div className="item urlBlock">
          <a href="post.url">{post.url}</a>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
