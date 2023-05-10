import twitterLogo from "../../assets/twitterIcon.svg"
import home from "../../assets/twitterHome.svg";
import bookmarks from "../../assets/twitterBookmark.svg";
import explore from "../../assets/twitterExplore.svg";
import messages from "../../assets/twitterMessages.svg";
import notifications from "../../assets/twitterNotifications.svg";
import profile from "../../assets/twitterProfile.svg";

function ListItems(){
    const leftPanelListItems=[{
        title: "",
        icon: twitterLogo
    },
        {
        title: "Home",
        icon: home
    },{
        title: "Explore",
        icon: explore
    },{
        title: "Notifications",
        icon: notifications
    },{
        title: "Messages",
        icon: messages
    },{
        title: "Bookmarks",
        icon: bookmarks
    },{
        title: "Profile",
        icon: profile
    }];
    return(
        leftPanelListItems.map((item,index)=>{
            return(
                <a href="/temp" className="left-list-item">
                    <div className="icon">
                        <img className="leftPanelIcon" src = {item.icon}></img>
                    </div>
                    <div className="leftPanelItemTitle">{item.title}</div>
                </a>
            )
        })
    )
}
export default ListItems;
