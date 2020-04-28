import React from "react";

const PostDetails = (props) => {
  const { post } = props;
  console.log("PostDetails :: props : ", post);
  return (
    <div className="postDetails">
      <div className="detailHeader"></div>
      <div className="detailBody">
        <div className="postLabel">
          <label>ID : </label>
          {post.id}
        </div>
        <div className="postLabel">
          <label>Name : </label>
          {post.name}
        </div>

        <img
          className="postImg"
          src={post.banner_background_image}
          alt="post bg"
          height="142"
          width="142"
        ></img>
      </div>
    </div>
  );
};

export default PostDetails;
