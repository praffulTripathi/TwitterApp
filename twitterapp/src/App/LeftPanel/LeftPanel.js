import { Suspense, useContext, useState } from 'react';
import ListItems from "./ListItems";
import TweetButton from "./TweetButton";
import UserInfo from "./UserInfo";
import { APIResponseContext } from '../Providers/APIContext';

function LeftPanel() {
    return (
        <div className="leftPanel">
            <div className="left-panel-list">
                <ListItems />
                <TweetButton />
            </div>
            <div className="userInfoDisplay">
                <UserInfo />
            </div>
        </div>
    )
}
export default LeftPanel;