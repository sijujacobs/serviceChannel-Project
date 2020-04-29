import { subredditConstants } from "../constants";

const initialState = {
  categories: [],
  loading: false,
  error: {},
};
const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
    case subredditConstants.FETCH_SUBREDDIT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case subredditConstants.FETCH_SUBREDDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload.data,
      };
    case subredditConstants.FETCH_SUBREDDIT_FAILURE:
      console.log(
        " FETCH_SUBREDDIT_FAILURE :: payload : ",
        action.payload.error
      );
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        categories: [],
      };
    default: {
      return state;
    }
  }
};

export default subredditReducer;
