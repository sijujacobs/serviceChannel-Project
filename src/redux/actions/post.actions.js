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

function getPosts() {
  return (dispatch) => {
    dispatch(fetchPostsBegin());
    postService.getPosts().then(
      (data) => dispatch(fetchPostsSuccess(data)),
      (error) => dispatch(fetchPostsFailure(error))
    );
  };
}

export const postActions = {
  getPosts,
};
