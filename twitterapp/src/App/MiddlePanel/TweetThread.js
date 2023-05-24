function TweetThread({ tweetThread }) {
  if (tweetThread != null) {
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
    });
  }
}
export default TweetThread;
