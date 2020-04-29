import React from "react";

const PostCard = (props) => {
  const { post, activePost } = props;

  // const data = post.data;
  // console.log(" ::post.preview  : ", img);
  console.log(" :: Post : ", post);
  // && post.preview.images && post.preview.images[0] && post.preview.images[0].resolutions[0]

  const onClickHandler = () => {
    props.onSelection(post);
  };

  return (
    <div
      className={activePost.id === post.id ? "postCard activeItem" : "postCard"}
      onClick={onClickHandler}
    >
      <div className="cardBody">
        <div className="detailsBlock">
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
        <div className="imageBlock"></div>
      </div>
    </div>
  );
};

export default PostCard;
