import { useContext, useState, useEffect } from 'react';
import { APIResponseContext } from '../Providers/APIContext';
import SvgIcon from './SvgIcon';


function ListItems() {

    const [listItems, setListItems] = useState(null);
    // const [svgData, setSvgData] = useState(null);

    const apiResponse = useContext(APIResponseContext);
    if (apiResponse != null && listItems == null) {
        setListItems(apiResponse["sideNavigationButtons"]);
    }

    // const fetchData = async () => {
    //     let allSvgData;
    //     try {
    //         const fetchPromises = apiResponse["sideNavigationButtons"].map(async (buttonData) => {
    //             const url = buttonData["icon"]["url"];
    //             let dataURL = null;
    //             await fetch(url)
    //                 .then(response => response.text())
    //                 .then(svgData => {
    //                     const fillColor = 'red';
    //                     dataURL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData.replace(/fill=".*?"/g, `fill="${fillColor}"`))}`;
    //                 });
    //             console.log(dataURL);
    //             return dataURL;
    //         });
    //         allSvgData = await Promise.all(fetchPromises);
    //         console.log(allSvgData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    //     return allSvgData;
    // };



    // if (apiResponse != null && svgData == null) {
    //     fetchDataNow = async () => { const fetchPromises = await fetchData(); return await Promise.all(fetchPromises); };
    //     // console.log(allSvgData);
    //     // setSvgData(allSvgData);
    // }

    // useEffect(() => {
    //     console.log(svgData);
    // }, [svgData]);

    if (listItems != null)
        return (
            listItems.map((item, index) => {
                return (
                    <a href={item.actionUrl} className="left-list-item" key={index}>
                        <div className="icon">
                            <img src={item.icon.url} className='leftPanelIcon'></img>
                            {/* <SvgIcon svgData={svgData[index]}></SvgIcon> */}
                        </div>
                        <div className="leftPanelItemTitle">{item.buttonText}</div>
                    </a>
                )
            })
        )
}
export default ListItems;
