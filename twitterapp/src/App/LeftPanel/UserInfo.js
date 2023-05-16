import { useContext, useState, useEffect } from 'react';
import { APIResponseContext } from '../Providers/APIContext';
import ProfileLogo from "../MiddlePanel/ProfileLogo";


function UserInfo() {
    const [userInfo, setUserInfo] = useState(null);

    const apiResponse = useContext(APIResponseContext);
    useEffect(() => {
        setUserInfo(apiResponse?.["loggedInUser"]);
    }, [apiResponse]);

    if (userInfo != null)
        return (
            <a className="userInfo" href="/temp">
                <ProfileLogo userLogo={userInfo.imageData.url} userAltText={userInfo.imageData.alt} />
                <div className="userDetails">
                    <div className="profileName">
                        {userInfo.userName}
                    </div>
                    <div className="userNameCard">
                        @{userInfo.userId}
                    </div>
                </div>
                <div className="hamburgerMenu">
                    ...
                </div>
            </a>
        )
}
export default UserInfo;