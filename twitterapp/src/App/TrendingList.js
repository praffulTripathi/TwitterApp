function TrendingList({trending}){
    return(
        trending.map((topic)=>[
            <div className="trendingListItems">
                <div className="category rightPanelColor">
                    {topic.category}
                </div>
                <div className="tweetTitle rightPanelColor">
                    {topic.tweetTitle}
                </div>
                <div className="trendingReason rightPanelColor">
                    {topic.trendingReason}
                </div>
            </div>
        ])
    )
}
export default TrendingList;