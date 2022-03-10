import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import "./css/App.css";
import "./css/index.css";
import firebase from "./firebase";
import BookmarksPage from "./Pages/BookmarksPage/BookmarksPage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import RenderWithoutTracking from "./Pages/VideoPlayer/RenderWithoutTracking";
import RenderWithTracking from "./Pages/VideoPlayer/RenderWithTracking";
import VideoPlayer from "./Pages/VideoPlayer/VideoPlayer";
import { UserContext } from "./UserContext";

const auth = firebase.auth();
const db = firebase.firestore();
export { db };

function App() {
  const [userLoggedIn] = useAuthState(auth);
  const [uid, setUid] = useState("");
  const value = { uid, setUid };
  return (
    <UserContext.Provider value={value}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => {
              return userLoggedIn ? <Dashboard /> : <LandingPage />;
            }}
          />
          <Route path={"/courses"} component={CoursesPage} />
          <Route path={"/explore"} component={ExplorePage} />
          <PrivateRoute path={"/bookmarks"} component={BookmarksPage} />
          <PrivateRoute path={"/settings"} component={SettingsPage} />
          <Route path={"/video-player"} component={VideoPlayer} />
          <Route path={"/video-player-track"} component={RenderWithTracking} />
          <Route
            path={"/video-player-no-track"}
            component={RenderWithoutTracking}
          />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

function LandingPage() {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-title">
        <h1>Welcome to YouDemy</h1>
        <br />
        <h2>
          Your chance to stop wasting time and track your YouTube Learning
        </h2>
        <div className="buttons-row-landing">
          <button className="sign-in" onClick={signInWithGoogle}>
            <label className="signin-label">SignIn with{"  "}</label>
            <img
              className="google-logo"
              src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
              alt="Google"
            ></img>
          </button>
          <a
            className="github-goto"
            href="https://github.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <button className="github-youtemy">
              Contribute{"  "}
              <i className="fab fa-github github-logo"></i>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
