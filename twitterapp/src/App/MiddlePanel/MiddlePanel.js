import { useEffect, useState } from "react";
import StickyBar from "./StickyBar";
import ComposeTweet from "./ComposeTweet";
import TweetList from "./TweetList";
function MiddlePanel() {
    console.log("Render Middle Panel");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const [tweets, addTweet] = useState([
        {
            key: 0,
            tweetDescription: "Hello Guys",
            tweetCommentCount: '10.4k',
            retweetCount: '1.1k',
            likesCount: '506K',
            tweetReach: '0',
            tweetDateTime: 'Jan 20'
        }, {
            key: 1,
            tweetDescription: 'It\'s the year 2021 and we still don\'t have flying cars',
            tweetCommentCount: '10.4k',
            retweetCount: '1.1k',
            likesCount: '506K',
            tweetReach: '107k',
            tweetDateTime: 'Jan 20'
        }, {
            key: 2,
            tweetDescription: 'It\'s the year 2021 and we still don\'t have flying cars',
            tweetCommentCount: '10.4k',
            retweetCount: '1.1k',
            likesCount: '506K',
            tweetReach: '107k',
            tweetDateTime: 'Jan 20'
        }, {
            key: 3,
            tweetDescription: 'It\'s the year 2021 and we still don\'t have flying cars',
            tweetCommentCount: '10.4k',
            retweetCount: '1.1k',
            likesCount: '506K',
            tweetReach: '107k',
            tweetDateTime: 'Jan 20'
        }, {
            key: 4,
            tweetDescription: 'It\'s the year 2021 and we still don\'t have flying cars',
            tweetCommentCount: '10.4k',
            retweetCount: '1.1k',
            likesCount: '506K',
            tweetReach: '107k',
            tweetDateTime: 'Jan 20'
        }, {
            key: 5,
            tweetDescription: 'It\'s the year 2021 and we still don\'t have flying cars',
            tweetCommentCount: '10.4k',
            retweetCount: '1.1k',
            likesCount: '506K',
            tweetReach: '107k',
            tweetDateTime: 'Jan 20'
        }]);

    const addTweetFunction = (description) => {
        const newTweet = {
            key: tweets.length + 1,
            tweetDescription: description,
            tweetCommentCount: '0',
            retweetCount: '0',
            likesCount: '0',
            tweetReach: '0',
            tweetDateTime: months[new Date().getMonth()] + ' ' + new Date().getDate()
        };
        addTweet(tweets => [newTweet, ...tweets]);
    };


    useEffect(()=>{
         console.log("Total tweets at time of mount " + tweets.length);
    },[]);

    useEffect(() => {
        console.log("Total tweets at the time of re-rendering " + tweets.length);
    }, [tweets]);


    return (
        <div className="middlePanel">
            <StickyBar />
            <ComposeTweet addTweetFunction={addTweetFunction} />
            <div className="tweetListOuter">
                <TweetList tweets={tweets} />
            </div>
        </div>
    )
}
export default MiddlePanel;