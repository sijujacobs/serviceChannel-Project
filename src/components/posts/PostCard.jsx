import React from "react";

const PostCard = (props) => {
  const { post, activePost } = props;

  // const data = post.data;

  const onClickHandler = () => {
    props.onSelection(post);
  };

  return (
    <div
      className={activePost.id === post.id ? "postCard activeItem" : "postCard"}
      onClick={onClickHandler}
    >
      <div className="cardBody">
        <div>
          <label>ID : </label>
          {post.id}
        </div>
        <div>
          <label>Name : </label>
          {post.name}
        </div>
        <div>
          <label>Display name: </label>
          {post.display_name}
        </div>
        <div>
          <label>Author : </label>
          {post.author}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
