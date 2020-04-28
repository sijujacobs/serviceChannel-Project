import { postConstants } from "../constants";

const initialState = {
  postsData: [],
  loading: false,
  error: {},
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postConstants.FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case postConstants.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        postsData: action.payload.postsData,
      };
    case postConstants.FETCH_POSTS_FAILURE:
      console.log(" FETCH_POSTS_FAILURE :: payload : ", action.payload.error);
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        postsData: [],
      };
    default: {
      return state;
    }
  }
};

export default postReducer;
