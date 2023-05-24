function TweetCount({ tweetCount }) {
  if (tweetCount != undefined) {
    const format = (tweetCount) => {
      let converted =
        Math.abs(tweetCount) > 999
          ? Math.sign(tweetCount) * (Math.abs(tweetCount) / 1000).toFixed(1) + "k"
          : Math.sign(tweetCount) * Math.abs(tweetCount);
      return converted;
    };
    tweetCount = format(tweetCount);
    return (
      <div className="tweetCountDisplay rightPanelColor">
        <div className="tweetCount">{tweetCount}</div>
        <div className="tweetsText">Tweets</div>
      </div>
    );
  }
}
export default TweetCount;
