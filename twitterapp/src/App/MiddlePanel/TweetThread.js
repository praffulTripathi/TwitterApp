import BlueTick from "./BlueTick";
import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg";

function TweetThread({ tweetThread }) {
  if (tweetThread != null) {
    console.log(tweetThread);
    return tweetThread.map((tweet, index) => {
      return (
        <div className="tweetList" id={index} key={index}>
          <ProfileLogo
            userLogo={tweet.user.imageData.url}
            userAltText={tweet.user.imageData.alt}
            imgClass={"middle"}
          />
          <div className="tweetBodyAndStats">
            <div className="userDetailsAndTime">
              <div className="tweetUserProfileName">{tweet.user.userName}</div>
              <BlueTick blueTick={tweet.user.blueTick}></BlueTick>
              <div className="tweetUserUserName">
                <div className="userName">@{tweet.user.userId}</div>
                <div className="dot">.</div>
              </div>
              <div className="tweetDateTime">{tweet.tweetTime}</div>
            </div>
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
                  updateTweetLikes(event, index);
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
        </div>
      );
    });
  }
}
export default TweetThread;
