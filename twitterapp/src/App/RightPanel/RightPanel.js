import { useEffect, useState, useContext } from "react";
import SearchPanel from "./SearchPanel";
import Trending from "./Trending";
import { APIResponseContext } from '../Providers/APIContext';
import FollowRecommendation from "./FollowRecommendation";


function RightPanel() {

    // Use trendingData, followData
    const [trendingData, setTrendingData] = useState(null);
    const [followData, setFollowData] = useState(null);

    const apiResponse = useContext(APIResponseContext);

    if (apiResponse != null) {
        // console.log(apiResponse["trendingData"]);
        // console.log(apiResponse["followData"]);
        // setFollowData(apiResponse["followData"]);
        // setFollowData(apiResponse["trendingData"]);
    }

    return (
        <div className="rightPanel">
            <SearchPanel />
            <Trending />
            <FollowRecommendation />
        </div>
    )
}
export default RightPanel;