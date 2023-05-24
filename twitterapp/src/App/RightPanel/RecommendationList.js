import { useEffect, useState, useContext } from "react";
import ProfileLogo from "../MiddlePanel/ProfileLogo";
import { APIResponseContext } from "../Providers/APIContext";
import BlueTick from "../MiddlePanel/BlueTick";
function RecommendationList({ followData }) {
  const [usersToFollow, setUsersToFollow] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  const apiResponse = useContext(APIResponseContext);

  useEffect(() => {
    if (apiResponse != undefined) setUserLoggedIn(apiResponse["loggedInUser"]);
  }, [apiResponse]);

  if (usersToFollow == null && followData != null)
    setUsersToFollow(followData["usersToFollow"]);

  if (usersToFollow != null && userLoggedIn != null)
    return usersToFollow.map((user, index) => {
      return (
        <div className="followSuggestions rightPanelColor" key={index}>
          <ProfileLogo
            userLogo={userLoggedIn.imageData.url}
            userAltText={userLoggedIn.imageData.alt}
            imgClass={"right"}
          />

          <div className="whoToFollow rightPanelColor">
            <div className="profileName rightPanelColor">
              <div className="name">{user.userName}</div>
              <BlueTick blueTick={user.blueTick}></BlueTick>
            </div>
            <div className="userNameCard rightPanelColor">{user.userId}</div>
          </div>
          <div className="followUser">Follow</div>
        </div>
      );
    });
}
export default RecommendationList;
