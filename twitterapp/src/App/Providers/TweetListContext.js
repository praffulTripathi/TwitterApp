import { createContext, useState, useEffect, useContext, useCallback } from "react";
import { APIResponseContext } from "./APIContext";

export const TweetListContext = createContext();

export const TweetListProvider = ({ children }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const apiResponse = useContext(APIResponseContext);

  const [tweetList, setTweetList] = useState([]);


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

  return (
    <TweetListContext.Provider value={{ tweetList, setTweetList }}>
      {children}
    </TweetListContext.Provider>
  )
}
