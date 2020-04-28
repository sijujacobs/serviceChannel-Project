import axios from "axios";
const BASE_URL = "https://www.reddit.com/subreddits/popular.json?raw_json=1";

function getPosts() {
  return axios.get(BASE_URL).then((response) => handleResponse(response));
}
function handleResponse(response) {
  // console.log("handleResponse :: response ", response);
  if (response.status !== 200) {
    console.log("PostSerive :: API ERROR  ");
  }
  return response.data.data.children;
}

export const postService = {
  getPosts,
};
