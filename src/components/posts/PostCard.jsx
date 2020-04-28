import React from "react";

const PostCard = (props) => {
  // const { data } = props.post;
  const { post } = props;
  const data = post.data;

  return (
    <div className="postCard" onClick={() => props.onSelection(data)}>
      <div className="cardHeader"></div>
      <div className="cardBody">
        <div>
          <label>ID : </label>
          {data.id}
        </div>
        <div>
          <label>Name : </label>
          {data.name}
        </div>

        <img
          className={data.banner_background_image ? "postImg" : "hide"}
          src={data.banner_background_image}
          alt="post bg"
          height="142"
          width="142"
        ></img>
      </div>
    </div>
  );
};

export default PostCard;
