function ReplyingTo({index,tweetOwner}){
    if(index>0){
        return(
            <div className="replyingTo">
                <span className="replyingText">
                    Replying to 
                </span> 
                <span className="tweetOwner">
                    @{tweetOwner}
                </span> 
            </div>
        )
    }
}
export default ReplyingTo;