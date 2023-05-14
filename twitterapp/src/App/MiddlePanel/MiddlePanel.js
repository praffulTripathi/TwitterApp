import { useEffect, useState, useContext } from "react";
import StickyBar from "./StickyBar";
import ComposeTweet from "./ComposeTweet";
import { APIResponseContext } from '../Providers/APIContext';
import TweetList from "./TweetList";


const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


function MiddlePanel() {

    const [tweetList, setTweetList] = useState([]);
    const apiResponse = useContext(APIResponseContext);

    const format = (num) => {
        // console.log(num);
        let converted = Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
        // console.log(converted);
        return converted;
    }

    if (apiResponse != null && tweetList.length == 0) {
        // setTweetList(apiResponse["tweetThreads"]);
        const tweetThreads = [...apiResponse["tweetThreads"]];
        console.log(tweetThreads);
        const convertedTweets = tweetThreads.map((tweets)=>{
            return tweets.map((tweet) => {
                return {...tweet,likes: format(tweet.likes),replies: format(tweet.replies),views: format(tweet.views),reTweets: format(tweet.reTweets), tweetTime: (months[new Date(tweet.tweetTime).getMonth()] + ' ' + new Date(tweet.tweetTime).getDate())}
            })
        })
        console.log(convertedTweets);
        setTweetList(convertedTweets);
    }

    const addTweetFunction = (description) => {
        let newTweet = [{
            user: apiResponse["loggedInUser"],
            tweetTime: months[new Date().getMonth()] + ' ' + new Date().getDate(),
            textArea: description,
            replies: 0,
            reTweets: 0,
            views: 0,
            likes: 0
        }]
        setTweetList(tweetList => [newTweet, ...tweetList]);
    };

    const likeTweet = (event) => {
        let id = event.target.parentNode.parentNode.parentNode.parentNode.id;
        setTweetList(prevTweets => {
            const newTweets = [...prevTweets];
            newTweets[id][0] = { ...newTweets[id][0], likes: newTweets[id][0].likes+1 };
            return newTweets;
        });
    }
    const dislikeTweet = (event) => {
        let id = event.target.parentNode.parentNode.parentNode.parentNode.id;
        setTweetList(prevTweets => {
            const newTweets = [...prevTweets];
            newTweets[id][0] = { ...newTweets[id][0], likes: newTweets[id][0].likes-1 };
            return newTweets;
        });
    }

        if (tweetList != null)
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