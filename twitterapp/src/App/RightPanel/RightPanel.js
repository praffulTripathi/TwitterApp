import { useEffect, useState, useContext } from "react";
import SearchPanel from "./SearchPanel";
import Trending from "./Trending";
import { APIResponseContext } from '../Providers/APIContext';
import FollowRecommendation from "./FollowRecommendation";


function RightPanel() {

    return (
        <div className="rightPanel">
            <SearchPanel />
            <Trending />
            <FollowRecommendation />
        </div>
    )
}
export default RightPanel;