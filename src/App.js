import React from "react";

import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import PostList from "./components/posts/PostList";
import ViewContainer from "./components/common/viewContainer/ViewContainer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="appContainer">
        <Header />
        <div className="bodyContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/view" component={ViewContainer} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/about" component={About} />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
