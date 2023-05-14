import { useContext, useState, useEffect } from 'react';
import { APIResponseContext } from '../Providers/APIContext';


function ListItems() {

    const [listItems, setListItems] = useState(null);

    const apiResponse = useContext(APIResponseContext);
    if (apiResponse != null && listItems == null) {
        setListItems(apiResponse["sideNavigationButtons"]);
    }

    if (listItems != null)
        return (
            listItems.map((item, index) => {
                return (
                    <a href={item.actionUrl} className="left-list-item" key={index}>
                        <div className="icon">
                            <img src={item.icon.url} className="leftPanelIcon"></img>
                        </div>
                        <div className="leftPanelItemTitle">{item.buttonText}</div>
                    </a>
                )
            })
        )
}
export default ListItems;
