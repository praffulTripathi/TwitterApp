import HashTags from "./HashTags";
import TweetCount from "./TweetCount";

function TrendingList({ trending }) {   
        return (
            trending.trends.map((trend, index) => [
                <div className="trendingListItems" key={index}>
                    <div className="trendingSubtitle rightPanelColor">
                        {trend.country} {trend.category}
                    </div>
                    <div className="trendingTitle rightPanelColor">
                        {trend.text}
                    </div>
                    <div className="trendingReason rightPanelColor">
                        <TweetCount tweetCount={trend.tweets}></TweetCount>
                        <HashTags hashTags={trend.hashTags} />
                    </div>
                </div>
            ])
        )
}
export default TrendingList;