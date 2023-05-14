import ProfileLogo from "./ProfileLogo";
import { useContext, useState, useEffect } from 'react';
import { APIResponseContext } from '../Providers/APIContext';

function ComposeTweet({ addTweetFunction }) {

    const [userLoggedIn, setUserLoggedIn] = useState(null);

    const apiResponse = useContext(APIResponseContext);
    if (apiResponse != null && userLoggedIn == null) {
        setUserLoggedIn(apiResponse["loggedInUser"]);
    }

    const addNewTweet = (event) => {
        let tweetTextArea = document.querySelector(".tweetTextInputBox");
        let tweetText = tweetTextArea.value;
        if (tweetText != "") {
            addTweetFunction(tweetText);
            tweetTextArea.value = "";
        }
    }
    
    if(userLoggedIn!=null){
        return (
            <div className="composeTweet">
                <ProfileLogo  userLogo={userLoggedIn.imageData.url} userAltText={userLoggedIn.imageData.alt}/>
                <div className="tweetText">
                    <textarea className="tweetTextInputBox" type="text" placeholder="What's happening?"></textarea>
                </div>
                <a className="generateNewTweet" onClick={addNewTweet}>
                    Tweet
                </a>
            </div>
        )
    }
}
export default ComposeTweet;