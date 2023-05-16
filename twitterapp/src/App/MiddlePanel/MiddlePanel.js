import { useEffect, useState, useContext, useCallback } from "react";
import StickyBar from "./StickyBar";
import ComposeTweet from "./ComposeTweet";
import { APIResponseContext } from '../Providers/APIContext';
import TweetList from "./TweetList";


const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


function MiddlePanel() {
    const [tweetList, setTweetList] = useState([]);
    const apiResponse = useContext(APIResponseContext);


    const format = (num) => {
        let converted = Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
        return converted;
    }

    useEffect(() => {
        if (apiResponse != undefined) {
            const allTweets = apiResponse?.["tweetThreads"];
            const tweetThreads = [...allTweets];
            const convertedTweets = tweetThreads?.map((tweets) => {
                return tweets.map((tweet) => {
                    return { ...tweet, likesFormatted: format(tweet.likes), repliesFormatted: format(tweet.replies), viewsFormatted: format(tweet.views), reTweetsFormatted: format(tweet.reTweets), tweetTime: (months[new Date(tweet.tweetTime).getMonth()] + ' ' + new Date(tweet.tweetTime).getDate()) }
                })
            })
            setTweetList(convertedTweets);
        }
    }, [apiResponse]);

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

    const likeTweet = (index) => {
        setTweetList(prevTweets => {
            const newTweets = [...prevTweets];
            newTweets[index][0] = { ...newTweets[index][0], likes: newTweets[index][0].likes + 1 };
            return newTweets;
        });
    }
    const dislikeTweet = (index) => {
        setTweetList(prevTweets => {
            const newTweets = [...prevTweets];
            newTweets[index][0] = { ...newTweets[index][0], likes: newTweets[index][0].likes - 1 };
            return newTweets;
        });
    }
    console.log(tweetList);

    if (tweetList != null)
        return (
            <div className="middlePanel scrollable">
                <StickyBar />
                <ComposeTweet addTweetFunction={addTweetFunction} />
                <div className="tweetListOuter">
                    <TweetList tweetList={tweetList} likeTweet={likeTweet} dislikeTweet={dislikeTweet} />
                </div>
            </div>
        )
}
export default MiddlePanel;