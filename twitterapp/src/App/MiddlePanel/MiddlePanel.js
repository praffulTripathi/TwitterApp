import { useEffect, useState, useContext } from "react";
import StickyBar from "./StickyBar";
import ComposeTweet from "./ComposeTweet";
import { APIResponseContext } from '../Providers/APIContext';
import TweetList from "./TweetList";


const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


function MiddlePanel() {


    // USE headerData, tweetThreads, tweetButton

    const [tweetList, setTweetList] = useState(null);
    const apiResponse = useContext(APIResponseContext);

    if (apiResponse != null && tweetList == null) {
        console.log(apiResponse["tweetThreads"]);
        setTweetList(apiResponse["tweetThreads"]);
    }


    const format = (num) => {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    if (tweetList != null) {
        tweetList.map(tweetThread => {
            tweetThread.map(tweet => {
                tweet["replies"] = format(tweet["replies"]);
                tweet["reTweets"] = format(tweet["reTweets"]);
                tweet["views"] = format(tweet["views"]);
                tweet["likes"] = format(tweet["likes"]);
                tweet["tweetTime"] = months[new Date(tweet["tweetTime"]).getMonth()] + ' ' + new Date(tweet["tweetTime"]).getDate();
            })
        })
    }

    useEffect(() => {
        console.log("Tweet List: ");
        console.log(tweetList);
    }, [tweetList]);




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
        console.log(tweetList);
    };





    if (tweetList != null)
        return (
            <div className="middlePanel">
                <StickyBar />
                <ComposeTweet addTweetFunction={addTweetFunction} />
                <div className="tweetListOuter">
                    <TweetList tweetList={tweetList} />
                </div>
            </div>
        )
}
export default MiddlePanel;