import ProfileLogo from "./ProfileLogo";
import likesIcon from "../../assets/likesIcon.svg";
import commentsIcon from "../../assets/commentIcon.svg";
import retweetIcon from "../../assets/retweetIcon.svg";
import tweetReachIcon from "../../assets/tweetReachIcon.svg"
import { useContext, useState, useEffect } from 'react';
import { APIResponseContext } from '../Providers/APIContext';

function TweetList({ tweetList }) {
    console.log(tweetList);
    if (tweetList != null)
        return (
            tweetList.map((tweet,index) => {
                return (
                    <div className="tweetList" key={index}>
                        <ProfileLogo userLogo={tweet[0].user.imageData.url} userAltText={tweet[0].user.imageData.alt}/>

                        <div className="tweetBodyAndStats">
                            <div className="userDetailsAndTime">
                                <span className="profileName">{tweet[0].user.userName}&emsp;</span>
                                <span className="userNameCard">{tweet[0].user.userId}&emsp;.&emsp;</span>
                                <span className="dateTimeOfTweet">{tweet[0].tweetTime}</span>
                            </div>
                            <div className="tweetBody">
                                {tweet[0].textArea}
                            </div>
                            <div className="tweetStats">
                                <div className="commentCount">
                                    <img src={commentsIcon} className="tweetStatIcon">

                                    </img>
                                    <span>{tweet[0].replies}</span>
                                </div>
                                <div className="retweetCount">
                                    <img src={retweetIcon} className="tweetStatIcon">

                                    </img>
                                    <span>{tweet[0].reTweets}</span>

                                </div>
                                <div className="likesCount">
                                    <img src={likesIcon} className="tweetStatIcon">

                                    </img>
                                    <span>{tweet[0].likes}</span>

                                </div>
                                <div className="tweetReach">
                                    <img src={tweetReachIcon} className="tweetStatIcon">

                                    </img>
                                    <span>{tweet[0].views}</span>

                                </div>
                            </div>
                        </div>

                    </div>
                )
            })
        )
}
export default TweetList;