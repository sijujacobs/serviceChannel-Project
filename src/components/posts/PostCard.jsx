import React from "react";

const PostCard = (props) => {
  const { post, activePostID } = props;
  const data = post.data;

  const onClickHandler = () => {
    props.onSelection(data);
  };

  // className={
  //   link.className +
  //   (data.id === activePost.id ? " activeCard" : "")
  // }
  // className={"postCard " + (activePostID === data.id) ? "activdeCard" : ""}

  return (
    <div
      className={activePostID === data.id ? "postCard activeCard" : "postCard"}
      onClick={onClickHandler}
    >
      <div className="cardBody">
        <div>
          <label>ID : </label>
          {data.id}
        </div>
        <div>
          <label>Name : </label>
          {data.name}
        </div>
        <div>
          <label>Display Name : </label>
          {data.display_name}
        </div>
        {/* 
        <img
          className={data.banner_background_image ? "postImg" : "hide"}
          src={data.banner_background_image}
          alt="post bg"
          height="142"
          width="142"
        ></img> */}
      </div>
    </div>
  );
};

export default PostCard;
