import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg";
import { useContext, useState, useEffect } from "react";
import { APIResponseContext } from "../Providers/APIContext";
import BlueTick from "./BlueTick";
import TweetThread from "./TweetThread";

function TweetList({ tweetList, likeTweet, dislikeTweet }) {
  const updateTweetLikes = (event, index) => {
    if (event.target.parentNode.classList.contains("isLiked")) {
      event.target.parentNode.classList.remove("isLiked");
      dislikeTweet(index);
    } else {
      likeTweet(index);
      event.target.parentNode.classList.add("isLiked");
    }
  };

  if (tweetList != null) {
    return tweetList.map((tweetThread) => {
      console.log(tweetThread);
      return (
        <div className="tweetThreadOuter">
          <TweetThread tweetThread={tweetThread}></TweetThread>
        </div>
      );
    });
  }
}
export default TweetList;
