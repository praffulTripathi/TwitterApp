
import { useEffect, useState, useContext } from "react";
import { APIResponseContext } from '../Providers/APIContext';
import RecommendationList from "./RecommendationList";

function FollowRecommendation() {
    const [followData, setFollowData] = useState(null);
    const apiResponse = useContext(APIResponseContext);

    if (apiResponse != null && followData == null) {
        setFollowData(apiResponse["followData"]);
    }

    if (followData != null)
        return (
            <div className="recommendations rightPanelColor">
                <div className="whatsHappening rightPanelColor noTopMargin" >{followData.title}</div>
                <div className="suggestionsList">
                    <RecommendationList followData={followData} />
                </div>
                <div className="showMore rightPanelColor">
                    <a className="showMoreAnchor rightPanelColor">Show more</a>
                </div>
            </div>
        )
}
export default FollowRecommendation;