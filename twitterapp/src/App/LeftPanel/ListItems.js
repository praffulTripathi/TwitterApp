import twitterLogo from "../../assets/twitterIcon.svg"
import home from "../../assets/twitterHome.svg";
import bookmarks from "../../assets/twitterBookmark.svg";
import explore from "../../assets/twitterExplore.svg";
import messages from "../../assets/twitterMessages.svg";
import notifications from "../../assets/twitterNotifications.svg";
import profile from "../../assets/twitterProfile.svg";

function ListItems() {
    const leftPanelListItems = [{
        key: 0,
        title: "",
        icon: twitterLogo
    },
    {
        key: 1,
        title: "Home",
        icon: home
    }, {
        key: 2,
        title: "Explore",
        icon: explore
    }, {
        key: 3,
        title: "Notifications",
        icon: notifications
    }, {
        key: 4,
        title: "Messages",
        icon: messages
    }, {
        key: 5,
        title: "Bookmarks",
        icon: bookmarks
    }, {
        key: 6,
        title: "Profile",
        icon: profile
    }];
    return (
        leftPanelListItems.map((item, index) => {
            return (
                <a href="/temp" className="left-list-item" key={item.key}>
                    <div className="icon">
                        <img className="leftPanelIcon" src={item.icon}></img>
                    </div>
                    <div className="leftPanelItemTitle">{item.title}</div>
                </a>
            )
        })
    )
}
export default ListItems;
