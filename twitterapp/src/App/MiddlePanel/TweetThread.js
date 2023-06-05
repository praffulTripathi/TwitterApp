import BlueTick from "./BlueTick";
import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg";
import ReplyingTo from "./ReplyingTo";
import Thread from "./Thread";

function TweetThread({ tweetThread, likeTweet, dislikeTweet, updateTweetLikes, threadIndex, threadTweetsCount }) {
  if (tweetThread != null) {
    return tweetThread.map((tweet, index) => {
        const tweetID = threadIndex+'-'+index;
      return (
        <div className="tweetList" id={tweetID} key={index}>
          <ProfileLogo
            userLogo={tweet.user.imageData.url}
            userAltText={tweet.user.imageData.alt}
            imgClass={"middle"}
          />
          <div className="tweetBodyAndStats">
            <div className="userDetailsAndTime">
              <div className="tweetUserProfileName">{tweet.user.userName}</div>
              <BlueTick blueTick={tweet.user.blueTick} bkgColor={"black"}></BlueTick>
              <div className="tweetUserUserName">
                <div className="userName">@{tweet.user.userId}</div>
                <div className="dot">.</div>
              </div>
              <div className="tweetDateTime">{tweet.tweetTime}</div>
            </div>
            <ReplyingTo index={index} tweetOwner={tweet.user.userId}></ReplyingTo>
            <div className="tweetBody">{tweet.textArea}</div>
            <div className="tweetStats">
              <div className="commentCount">
                <img src={commentsIcon} className="tweetStatIcon"></img>
                <span className="text">{tweet.repliesFormatted}</span>
              </div>
              <div className="retweetCount">
                <img src={retweetIcon} className="tweetStatIcon"></img>
                <span className="text">{tweet.reTweetsFormatted}</span>
              </div>
              <div
                className="likesCount"
                onClick={(event) => {
                  updateTweetLikes(event, tweetID);
                }}
              >
                <img src={likesIcon} className="tweetStatIcon"></img>
                <span className="text">{tweet.likesFormatted}</span>
              </div>
              <div className="tweetReach">
                <img src={tweetReachIcon} className="tweetStatIcon"></img>
                <span className="text">{tweet.viewsFormatted}</span>
              </div>
            </div>
          </div>
          <Thread threadTweetsCount={threadTweetsCount} tweetNo={index}></Thread>
        </div>
      );
    });
  }
}
export default TweetThread;
