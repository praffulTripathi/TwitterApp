
import { useEffect, useState } from "react";
import RecommendationList from "./RecommendationList";
function FollowRecommendation(){
    const [recommendation,updateRecommendations] = useState([
        {
            profileIcon: "https://pbs.twimg.com/profile_images/1262261228652675072/Pl_u58Pb_normal.jpg",
            profileName: "Amitabh Bacchan",
            userName:"@SrBachchan"
        },{
            profileIcon: "https://pbs.twimg.com/profile_images/1262261228652675072/Pl_u58Pb_normal.jpg",
            profileName: "Amitabh Bacchan",
            userName:"@SrBachchan"
        }
    ])
    return(
        <div className="recommendations rightPanelColor">
            <div className="whatsHappening whoToFollow rightPanelColor noTopMargin" >Who To Follow</div>
            <div className="suggestionsList">
                <RecommendationList recommendation={recommendation}/>
            </div>
            <div className="showMore rightPanelColor">
                <a className="showMoreAnchor rightPanelColor">Show more</a>
            </div>
        </div>
    )
}
export default FollowRecommendation;