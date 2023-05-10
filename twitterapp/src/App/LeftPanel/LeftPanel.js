import ListItems from "./ListItems";
import TweetButton from "./TweetButton";
import UserInfo from "./UserInfo";
function LeftPanel(){

    return(
        <div className="leftPanel">
            <div className="left-panel-list">
                <ListItems />
                <TweetButton />
            </div>
            <div className="userInfoDisplay">
                <UserInfo />
            </div>
        </div>
    )
}
export default LeftPanel;