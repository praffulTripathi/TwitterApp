
import { useEffect, useState } from "react";
import RecommendationList from "./RecommendationList";
function FollowRecommendation() {
    const [recommendation, updateRecommendations] = useState([
        {
            key: 0,
            profileIcon: "https://pbs.twimg.com/profile_images/1262261228652675072/Pl_u58Pb_normal.jpg",
            profileName: "Amitabh Bacchan",
            userName: "@SrBachchan"
        }, {
            key: 1,
            profileIcon: "https://pbs.twimg.com/profile_images/1262261228652675072/Pl_u58Pb_normal.jpg",
            profileName: "Amitabh Bacchan",
            userName: "@SrBachchan"
        }
    ])
    
    return (
        <div className="recommendations rightPanelColor">
            <div className="whatsHappening rightPanelColor noTopMargin" >Who To Follow</div>
            <div className="suggestionsList">
                <RecommendationList recommendation={recommendation} />
            </div>
            <div className="showMore rightPanelColor">
                <a className="showMoreAnchor rightPanelColor">Show more</a>
            </div>
        </div>
    )
}
export default FollowRecommendation;