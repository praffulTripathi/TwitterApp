import { useContext, useState, useEffect } from "react";
import { APIResponseContext } from "../Providers/APIContext";
import ProfileLogo from "../MiddlePanel/ProfileLogo";
import BlueTick from "../MiddlePanel/BlueTick";

function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  const apiResponse = useContext(APIResponseContext);
  useEffect(() => {
    setUserInfo(apiResponse?.["loggedInUser"]);
  }, [apiResponse]);

  if (userInfo != null)
    return (
      <a className="userInfo" href="/temp">
        <ProfileLogo
          userLogo={userInfo.imageData.url}
          userAltText={userInfo.imageData.alt}
          imgClass={"left"}
        />
        <div className="userDetails">
          <div className="profileName">
            <div className="name">{userInfo.userName}</div>            
            <BlueTick blueTick={userInfo.blueTick}></BlueTick>
          </div>
          <div className="userNameCard">@{userInfo.userId}</div>
        </div>
        <div className="hamburgerMenu">...</div>
      </a>
    );
}
export default UserInfo;
