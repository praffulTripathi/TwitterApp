function RecommendationList({recommendation}){
    return(
        recommendation.map((suggestion)=>[
            <div className="followSuggestions rightPanelColor">
                <div className="profileLogo rightPanelColor noMargin">
                <img src={suggestion.profileIcon}></img>   
                </div>
                
                <div className="whoToFollow rightPanelColor">
                    <div className="profileName rightPanelColor">
                        {suggestion.profileName}
                    </div>
                    <div className="userNameCard rightPanelColor">
                        {suggestion.userName}
                    </div>
                </div>
                <div className="followUser">
                    Follow
                </div>
            </div>
    ])
    )
}
export default RecommendationList;