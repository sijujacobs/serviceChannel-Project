import React from "react";

import { HashRouter } from "react-router-dom";
import PostList from "./components/posts/PostList";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="appContainer">
        <Header />
        <PostList />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
