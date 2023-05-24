import ProfileLogo from "./ProfileLogo";
import { useContext, useState, useEffect } from 'react';
import { APIResponseContext } from '../Providers/APIContext';

function ComposeTweet({ addTweetFunction }) {

    const [userLoggedIn, setUserLoggedIn] = useState(null);

    const apiResponse = useContext(APIResponseContext);

    useEffect(()=>{
        if(apiResponse!=undefined)
            setUserLoggedIn(apiResponse["loggedInUser"]);
    },[apiResponse]);

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
                <ProfileLogo  userLogo={userLoggedIn.imageData.url} userAltText={userLoggedIn.imageData.alt} imgClass={"middle"}/>
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