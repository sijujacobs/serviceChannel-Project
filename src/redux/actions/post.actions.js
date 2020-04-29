import { postConstants } from "../constants";
import { postService } from "../services";

const fetchPostsBegin = () => ({
  type: postConstants.FETCH_POSTS_BEGIN,
});

const fetchPostsSuccess = (postsData) => ({
  type: postConstants.FETCH_POSTS_SUCCESS,
  payload: { postsData },
});

const fetchPostsFailure = (error) => ({
  type: postConstants.FETCH_POSTS_FAILURE,
  payload: { error },
});
const formatPostData = (data) => {
  // console.log("formatPostData :: : ", data);
  return data.map((d) => {
    let dObject = {};
    dObject.id = d.data.id;
    dObject.name = d.data.name;
    dObject.title = d.data.title;
    dObject.author = d.data.author;
    dObject.author_fullname = d.data.author_fullname;
    dObject.selftext = d.data.selftext; //Big text
    dObject.url = d.data.url;
    dObject.domain = d.data.domain;

    return dObject;
  });
  // return data;
};

function getPosts(category) {
  return (dispatch) => {
    dispatch(fetchPostsBegin());
    postService.getPosts(category).then(
      (data) => dispatch(fetchPostsSuccess(formatPostData(data))),
      (error) => dispatch(fetchPostsFailure(error))
    );
  };
}

export const postActions = {
  getPosts,
};
