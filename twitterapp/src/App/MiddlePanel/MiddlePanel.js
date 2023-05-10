import { useEffect, useState } from "react";
import StickyBar from "./StickyBar";
import ComposeTweet from "./ComposeTweet";
import TweetList from "./TweetList";
function MiddlePanel(){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const d = new Date();
    let month = months[d.getMonth()];
    const [tweets,addTweet]= useState([{
        tweetDescription: "Hello Guys" ,
        tweetCommentCount: '10.4k',
        retweetCount: '1.1k',
        likesCount: '506K',
        tweetReach: '0',
        tweetDateTime: 'Jan 20'
    },{
        tweetDescription:'It\'s the year 2021 and we still don\'t have flying cars',
        tweetCommentCount: '10.4k',
        retweetCount: '1.1k',
        likesCount: '506K',
        tweetReach: '107k',
        tweetDateTime: 'Jan 20'
    },{
        tweetDescription:'It\'s the year 2021 and we still don\'t have flying cars',
        tweetCommentCount: '10.4k',
        retweetCount: '1.1k',
        likesCount: '506K',
        tweetReach: '107k',
        tweetDateTime: 'Jan 20'
    },{
        tweetDescription:'It\'s the year 2021 and we still don\'t have flying cars',
        tweetCommentCount: '10.4k',
        retweetCount: '1.1k',
        likesCount: '506K',
        tweetReach: '107k',
        tweetDateTime: 'Jan 20'
    },{
        tweetDescription:'It\'s the year 2021 and we still don\'t have flying cars',
        tweetCommentCount: '10.4k',
        retweetCount: '1.1k',
        likesCount: '506K',
        tweetReach: '107k',
        tweetDateTime: 'Jan 20'
    },{
        tweetDescription:'It\'s the year 2021 and we still don\'t have flying cars',
        tweetCommentCount: '10.4k',
        retweetCount: '1.1k',
        likesCount: '506K',
        tweetReach: '107k',
        tweetDateTime: 'Jan 20'
    }]);

    const addTweetFunction = (description) =>{
        const newTweet = {
            tweetDescription:description,
            tweetCommentCount: '0',
            retweetCount: '0',
            likesCount: '0',
            tweetReach: '0',
            tweetDateTime: months[new Date().getMonth()] + ' ' +new Date().getDate()
        };
        console.log(description);
        addTweet(tweets => [newTweet,...tweets]);
    };

    useEffect(()=>{
        console.log(tweets.length);
    },[tweets]);
    
    
    return(
        <div className="middlePanel">
            <StickyBar />
            <ComposeTweet addTweetFunction={addTweetFunction}/>
            <div className="tweetListOuter">
                <TweetList tweets={tweets}/>
            </div>
        </div>
    )
}
export default MiddlePanel;