import React from "react";

const PostDetails = (props) => {
  const { post } = props;
  return (
    <div className="postDetails">
      <div className="detailHeader">
        <div className="postName">{post.name}</div>
      </div>
      <div className="detailBody">
        <img
          className={post.banner_background_image ? "postImg" : "hide"}
          src={post.banner_background_image}
          alt="post bg"
          height="142"
          width="142"
        ></img>

        <div className="postDesc">{post.description}</div>
      </div>
    </div>
  );
};

export default PostDetails;
