function Thread({ threadTweetsCount, tweetNo }) {
  if (threadTweetsCount > 0) {
    if(threadTweetsCount==1){
      return <div className="threadDisplay noThreadLine"></div>;
    }
    else if(tweetNo==0){
        return <div className="threadDisplay noTop"></div>;
    }
    else if(tweetNo==threadTweetsCount-1){
        return <div className="threadDisplay noBottom"></div>;
    }
    else return 
    return <div className="threadDisplay topAndBottom"></div>;
  }
}
export default Thread;
