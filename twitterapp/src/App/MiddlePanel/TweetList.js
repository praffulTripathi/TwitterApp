import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg";
import { useContext, useState, useEffect } from "react";
import { APIResponseContext } from "../Providers/APIContext";
import BlueTick from "./BlueTick";

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
      return (tweetList.map((tweet, index) => {
        return (
          <div className="tweetList" id={index} key={index}>
            <ProfileLogo
              userLogo={tweet[0].user.imageData.url}
              userAltText={tweet[0].user.imageData.alt}
              imgClass={"middle"}
            />
            <div className="tweetBodyAndStats">
              <div className="userDetailsAndTime">
                <div className="tweetUserProfileName">
                  {tweet[0].user.userName}
                </div>
                <BlueTick blueTick={tweet[0].user.blueTick}></BlueTick>
                <div className="tweetUserUserName">
                  <div className="userName">@{tweet[0].user.userId}</div>
                  <div className="dot">.</div>
                </div>
                <div className="tweetDateTime">{tweet[0].tweetTime}</div>
              </div>
              <div className="tweetBody">{tweet[0].textArea}</div>
              <div className="tweetStats">
                <div className="commentCount">
                  <img src={commentsIcon} className="tweetStatIcon"></img>
                  <span className="text">{tweet[0].repliesFormatted}</span>
                </div>
                <div className="retweetCount">
                  <img src={retweetIcon} className="tweetStatIcon"></img>
                  <span className="text">{tweet[0].reTweetsFormatted}</span>
                </div>
                <div
                  className="likesCount"
                  onClick={(event) => {
                    updateTweetLikes(event, index);
                  }}
                >
                  <img src={likesIcon} className="tweetStatIcon"></img>
                  <span className="text">{tweet[0].likesFormatted}</span>
                </div>
                <div className="tweetReach">
                  <img src={tweetReachIcon} className="tweetStatIcon"></img>
                  <span className="text">{tweet[0].viewsFormatted}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }))
  }
}
export default TweetList;
