import React, { useState } from "react";

import { connect } from "react-redux";
import { postActions } from "../../redux/actions";
import PostCard from "./PostCard";
import PostDetails from "./PostDetails";

import "./css/post.css";

const PostList = (props) => {
  const { postsData } = props;
  console.log("PostList :: : ", postsData);
  // let firstPost = postsData[0] && postsData[0].data;
  const [selectedPost, setSelectedPost] = useState({});
  // const [selectedPost, setSelectedPost] = useState(
  //   postsData[0] && postsData[0].data ? postsData[0].data : {}
  // );

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  const onSelectHandler = (thisPost) => {
    console.log(" onSelectHandler ::thisPost : ", thisPost);
    thisPost && setSelectedPost(thisPost);
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
              activePost={selectedPost ? selectedPost : postsData[0]}
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPosts: () => dispatch(postActions.getPosts()),
//   };
// };

const connectedPostList = connect(mapStateToProps)(PostList);
export default connectedPostList;
