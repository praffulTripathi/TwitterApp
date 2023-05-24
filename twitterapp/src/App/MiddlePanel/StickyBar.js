function StickyBar() {
    return (
        <div className="stickyBar">
            <div className="homeText">
                Home
            </div>
            <div className="feedTweetsCategory">
                <div className="yourTweets centerText maxHeight">
                    <div className="textWithPill">
                        <span className="textDesc">For You</span>
                        <div className="bottomPill">
                        </div>
                    </div>
                </div>
                <div className="followingTweets centerText maxHeight">
                    <div className="textWithPill">
                        <span className="textDesc isNotActive">Following</span>
                        <div className="bottomPill">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StickyBar;