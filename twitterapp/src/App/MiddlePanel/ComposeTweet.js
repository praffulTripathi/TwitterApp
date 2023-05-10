import ProfileLogo from "./ProfileLogo";

function ComposeTweet({addTweetFunction}){
    const addNewTweet = (event) =>{
        let tweetTextArea = document.querySelector(".tweetTextInputBox");
        let tweetText = tweetTextArea.value;
        if(tweetText!=""){
            addTweetFunction(tweetText);
            tweetTextArea.value="";
        }
    }
    return(
        <div className="composeTweet">
            <ProfileLogo />
            <div className="tweetText">
                <textarea className="tweetTextInputBox" type="text" placeholder="What's happening?"></textarea>
            </div>
            <a className="generateNewTweet" onClick={addNewTweet}>
                Tweet
            </a>
        </div>
    )
}
export default ComposeTweet;