import { useEffect, useState, useContext, useCallback } from "react";
import StickyBar from "./StickyBar";
import ComposeTweet from "./ComposeTweet";
import { APIResponseContext } from '../Providers/APIContext';
import TweetList from "./TweetList";
import { TweetListContext } from "../Providers/TweetListContext";

function MiddlePanel() {
    
    const { tweetList, setTweetList } = useContext(TweetListContext);
    const apiResponse = useContext(APIResponseContext);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const format = (num) => {
        let converted = Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
        return converted;
    }

    const addTweetFunction = useCallback((description) => {
        let newTweet = [{
            user: apiResponse["loggedInUser"],
            tweetTime: months[new Date().getMonth()] + ' ' + new Date().getDate(),
            textArea: description,
            replies: 0,
            reTweets: 0,
            views: 0,
            likes: 0,
            likesFormatted: 0,
            viewsFormatted: 0,
            reTweetsFormatted: 0,
            repliesFormatted: 0
        }]
        setTweetList(tweetList => [newTweet, ...tweetList]);
    });

    const likeTweet = (tweetID) => {
        const [threadID,tweetNo] = tweetID.split('-');
        console.log(threadID+"&&"+tweetNo);
        setTweetList(prevTweets => {
            const newTweets = [...prevTweets];
            newTweets[threadID][tweetNo] = { ...newTweets[threadID][tweetNo], likes: newTweets[threadID][tweetNo].likes + 1, likesFormatted: format(newTweets[threadID][tweetNo].likes + 1) };
            return newTweets;
        });
    }
    const dislikeTweet = (tweetID) => {
        const [threadID,tweetNo] = tweetID.split('-');
        console.log(threadID+"&&"+tweetNo);
        setTweetList(prevTweets => {
            const newTweets = [...prevTweets];
            newTweets[threadID][tweetNo] = { ...newTweets[threadID][tweetNo], likes: newTweets[threadID][tweetNo].likes - 1, likesFormatted: format(newTweets[threadID][tweetNo].likes - 1) };
            return newTweets;
        });
    }

    return (
        <div className="middlePanel">
            <StickyBar />
            <ComposeTweet addTweetFunction={addTweetFunction} />
            <div className="tweetListOuter">
                <TweetList tweetList={tweetList} likeTweet={likeTweet} dislikeTweet={dislikeTweet} />
            </div>
        </div>
    )

}
export default MiddlePanel;