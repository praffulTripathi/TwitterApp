import SearchPanel from "./SearchPanel";
import Trending from "./Trending";
import FollowRecommendation from "./FollowRecommendation";
function RightPanel(){
    return(
        <div className="rightPanel">
            <SearchPanel />
            <Trending />
            <FollowRecommendation />
        </div>
    )
}
export default RightPanel;