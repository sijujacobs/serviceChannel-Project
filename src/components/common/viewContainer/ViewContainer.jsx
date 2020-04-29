import React from "react";

import SubredditList from "../../subreddits/SubredditList";
import PostList from "../../posts/PostList";
import "../css/common.css";
const ViewContainer = () => {
  // const [selectedCategory, setSelectedCategory] = useState({});
  // const onSelectHandler = (thisCategory) => {
  //   console.log(
  //     "ViewContainer ::onSelectHandler thisCategory : ",
  //     thisCategory
  //   );
  //   setSelectedCategory(thisCategory);
  // };
  return (
    <div className="viewContainer">
      <SubredditList />
      <PostList />
    </div>
  );
};

export default ViewContainer;
