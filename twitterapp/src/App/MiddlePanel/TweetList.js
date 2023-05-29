import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg";
import { useContext, useState, useEffect } from "react";
import { APIResponseContext } from "../Providers/APIContext";
import BlueTick from "./BlueTick";
import TweetThread from "./TweetThread";
import Thread from "./Thread";

function TweetList({ tweetList, likeTweet, dislikeTweet }) {
  const updateTweetLikes = (event, tweetID) => {
    if (event.target.parentNode.classList.contains("isLiked")) {
      event.target.parentNode.classList.remove("isLiked");
      dislikeTweet(tweetID);
    } else {
      likeTweet(tweetID);
      event.target.parentNode.classList.add("isLiked");
    }
  };

  if (tweetList != null) {
    return tweetList.map((tweetThread, index) => {
      const threadTweetsCount = tweetThread.length;
      return (
        <div className="tweetThreadOuter" id={index} key={index}>
          <TweetThread
            tweetThread={tweetThread}
            tweetList={tweetList}
            likeTweet={likeTweet}
            dislikeTweet={dislikeTweet}
            updateTweetLikes={updateTweetLikes}
            threadIndex={index}
            threadTweetsCount={threadTweetsCount}
          ></TweetThread>
        </div>
      );
    });
  }
}
export default TweetList;
