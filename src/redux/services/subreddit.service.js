import axios from "axios";
const BASE_URL = "https://www.reddit.com/subreddits/popular.json?raw_json=1";

function getSubreddits() {
  return axios.get(BASE_URL).then((response) => handleResponse(response));
}
function handleResponse(response) {
  if (response.status !== 200) {
    console.log("subredditService :: API ERROR  ");
  }
  return response.data.data.children;
}

export const subredditService = {
  getSubreddits,
};

//1. https://www.reddit.com/subreddits/popular.json?raw_json=1
// 2. https://www.reddit.com/r/Minecraft/hot.json
// 3.
