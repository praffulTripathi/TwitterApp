import HashTags from "./HashTags";

function TrendingList({ trending }) {   
        return (
            trending.trends.map((trend, index) => [
                <div className="trendingListItems" key={index}>
                    <div className="category rightPanelColor">
                        {trend.country} {trend.category}
                    </div>
                    <div className="tweetTitle rightPanelColor">
                        {trend.text}
                    </div>
                    <div className="trendingReason rightPanelColor">
                        <span className="tweetCount">{trend.tweets}</span>
                        <HashTags hashTags={trend.hashTags} />
                    </div>
                </div>
            ])
        )
}
export default TrendingList;