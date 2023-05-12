import TrendingList from "./TrendingList";
import { useEffect, useState } from "react";

function Trending() {
    const [trendingTweets, updateTrending] = useState([
        {
            key: 0,
            category: 'Trending in India',
            tweetTitle: '#SupremeCourt',
            trendingReason: '10.4k Tweets'
        },
        {
            key: 1,
            category: 'Sports\t.\tTrending',
            tweetTitle: 'Gujrat Titans',
            trendingReason: 'Trending with #AavaDe #ipl'
        },
        {
            key: 2,
            category: 'Business & Finance\t.\t Trending',
            tweetTitle: '#SupremeCourt',
            trendingReason: '10.4k Tweets'
        },
        {
            key: 3,
            category: 'Indian Premier League\t.\tTrending',
            tweetTitle: 'MSDhoni',
            trendingReason: 'Trending with #ChennaiSuperKings #ipl'
        }
    ])



    return (
        <div className="trending rightPanelColor">
            <div className="whatsHappening rightPanelColor">What's happening</div>
            <TrendingList trending={trendingTweets} />
            <div className="showMore rightPanelColor">
                <a className="showMoreAnchor rightPanelColor">Show more</a>
            </div>
        </div>
    )
}
export default Trending;