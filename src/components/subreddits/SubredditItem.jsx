import React from "react";
import { postActions } from "../../redux/actions";

import { connect } from "react-redux";
const SubRedditItem = (props) => {
  const { category, getPosts, onSelection, activeCategory } = props;
  const onClickHandler = () => {
    getPosts(category);
    // setSelectedItemID(category.id);
    onSelection(category);
  };
  //  <div className="subRedditItem">
  return (
    <div
      className={
        activeCategory.id === category.id
          ? "subRedditItem activeItem"
          : "subRedditItem"
      }
    >
      <div className="linkButton" onClick={onClickHandler}>
        {category.title}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(postActions.getPosts(category)),
  };
};

const connectedSubRedditItem = connect(null, mapDispatchToProps)(SubRedditItem);
export default connectedSubRedditItem;
