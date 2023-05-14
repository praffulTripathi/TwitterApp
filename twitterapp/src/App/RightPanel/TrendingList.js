import HashTags from "./HashTags";

function TrendingList({ trending }) {
    if (trending != null)
        return (
            trending.trends.map((topic,index) => [
                <div className="trendingListItems" key={index}>
                    <div className="category rightPanelColor">
                        {topic.country} {topic.category}
                    </div>
                    <div className="tweetTitle rightPanelColor">
                        {topic.text}
                    </div>
                    <div className="trendingReason rightPanelColor">
                        {topic.tweets}  
                        <HashTags hashTags={topic.hashTags}/>
                    </div>
                </div>
            ])
        )
}
export default TrendingList;