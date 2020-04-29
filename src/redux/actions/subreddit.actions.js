import { subredditConstants } from "../constants";
import { subredditService } from "../services";

const fetchSubredditBegin = () => ({
  type: subredditConstants.FETCH_SUBREDDIT_BEGIN,
});

const fetchSubredditSuccess = (data) => ({
  type: subredditConstants.FETCH_SUBREDDIT_SUCCESS,
  payload: { data },
});

const fetchSubredditFailure = (error) => ({
  type: subredditConstants.FETCH_SUBREDDIT_FAILURE,
  payload: { error },
});

const formatSubredditData = (data) => {
  return data.map((d) => {
    let dObject = {};
    dObject.id = d.data.id;
    dObject.title = d.data.title;
    dObject.url = d.data.url;
    return dObject;
  });
};

function getSubreddits() {
  return (dispatch) => {
    dispatch(fetchSubredditBegin());
    subredditService.getSubreddits().then(
      (data) => {
        dispatch(fetchSubredditSuccess(formatSubredditData(data)));
      },
      (error) => dispatch(fetchSubredditFailure(error))
    );
  };
}

export const subredditActions = {
  getSubreddits,
};
