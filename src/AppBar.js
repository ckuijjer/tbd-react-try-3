import React from "react";
import { Link } from "react-router-dom";
import subreddits from "./subreddits.json";

const AppBar = () => {
  const styles = {
    container: {
      backgroundColor: "#333",
      display: "flex",
      justifyContent: "center"
    },
    content: {
      flex: 1,
      maxWidth: 768,
      padding: 16,
      boxSizing: "border-box"
    },
    link: {
      marginRight: 8,
      color: "#eee"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Link to="/counter" style={styles.link}>
          counter
        </Link>
        {subreddits.map(subreddit =>
          <Link to={`/${subreddit}`} style={styles.link} key={subreddit}>
            /r/{subreddit}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AppBar;
