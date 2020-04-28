import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { postActions } from "../../redux/actions";
import PostCard from "./PostCard";
import PostDetails from "./PostDetails";

import "./css/post.css";

const PostList = (props) => {
  const { getPosts, postsData } = props;

  const [selectedPost, setSelectedPost] = useState({});
  let firstPost = postsData[0] && postsData[0].data;
  console.log(" :: pfirstPost : ", firstPost);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const onSelectHandler = (thisPost) => {
    console.log("PostList ::onSelectHandler thisPost : ", thisPost);
    setSelectedPost(thisPost);
  };
  return (
    <div className="postList">
      <div className="scrollArea">
        {postsData &&
          postsData.length > 0 &&
          postsData.map((p, i) => (
            <PostCard
              key={i}
              post={p}
              activePostID={
                selectedPost ? selectedPost.id : postsData[0].data.id
              }
              onSelection={(tPost) => onSelectHandler(tPost)}
            />
          ))}
      </div>
      <div className="postDetailWrapper">
        <PostDetails post={selectedPost} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postsData: state.postReducer.postsData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(postActions.getPosts()),
  };
};

const connectedPostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
export default connectedPostList;
