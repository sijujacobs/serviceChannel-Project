import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { subredditActions } from "../../redux/actions";
import SubredditItem from "./SubredditItem";

import "./css/Subreddit.css";

const SubredditList = (props) => {
  const { getSubreddits, categories } = props;
  const [selectedCategory, setSelectedCategory] = useState({});
  const onSelectHandler = (thisCategory) => {
    setSelectedCategory(thisCategory);
  };
  useEffect(() => {
    getSubreddits();
  }, [getSubreddits]);
  return (
    <div className="subRedditList">
      <div className="scrollArea">
        {categories &&
          categories.length > 0 &&
          categories.map((c, i) => (
            <SubredditItem
              key={i}
              category={c}
              activeCategory={selectedCategory}
              onSelection={(tCat) => onSelectHandler(tCat)}
            />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.subredditReducer.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSubreddits: () => dispatch(subredditActions.getSubreddits()),
  };
};

const connectedSubredditList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList);
export default connectedSubredditList;

// export default SubRedditList;
