import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg"

function TweetList({ tweets }) {
    return (
        tweets.map(tweet => {
            return (
                <div className="tweetList" key={tweet.key}>
                    <ProfileLogo />

                    <div className="tweetBodyAndStats">
                        <div className="userDetailsAndTime">
                            <span className="profileName">Praffulla Tripathi&emsp;</span>
                            <span className="userNameCard">@prafful_t45_&emsp;.&emsp;    </span>
                            <span className="dateTimeOfTweet">{tweet.tweetDateTime}</span>
                        </div>
                        <div className="tweetBody">
                            {tweet.tweetDescription}
                        </div>
                        <div className="tweetStats">
                            <div className="commentCount">
                                <img src={commentsIcon} className="tweetStatIcon">

                                </img>
                                <span>{tweet.tweetCommentCount}</span>
                            </div>
                            <div className="retweetCount">
                                <img src={retweetIcon} className="tweetStatIcon">

                                </img>
                                <span>{tweet.retweetCount}</span>

                            </div>
                            <div className="likesCount">
                                <img src={likesIcon} className="tweetStatIcon">

                                </img>
                                <span>{tweet.likesCount}</span>

                            </div>
                            <div className="tweetReach">
                                <img src={tweetReachIcon} className="tweetStatIcon">

                                </img>
                                <span>{tweet.tweetReach}</span>

                            </div>
                        </div>
                    </div>

                </div>
            )
        })
    )
}
export default TweetList;