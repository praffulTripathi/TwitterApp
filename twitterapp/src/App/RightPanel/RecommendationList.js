import { useEffect, useState, useContext } from "react";
function RecommendationList({ followData }) {
    const [usersToFollow,setUsersToFollow] = useState(null);

    if(usersToFollow==null && followData!=null)
        setUsersToFollow(followData["usersToFollow"]);

    if (usersToFollow != null)
        return (
            usersToFollow.map((user,index) => [
                <div className="followSuggestions rightPanelColor" key={index}>
                    <div className="profileLogo rightPanelColor noMargin">
                        <img src={user.imageData.url} alt={user.imageData.alt}></img>
                    </div>

                    <div className="whoToFollow rightPanelColor">
                        <div className="profileName rightPanelColor">
                            {user.userName}
                        </div>
                        <div className="userNameCard rightPanelColor">
                            {user.userId}
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