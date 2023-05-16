import TrendingList from "./TrendingList";
import { useEffect, useState, useContext } from "react";
import { APIResponseContext } from '../Providers/APIContext';

function Trending() {

    const [trendingData, setTrendingData] = useState(null);
    const apiResponse = useContext(APIResponseContext);

    useEffect(() => {
        setTrendingData(apiResponse?.["trendingData"]);
    }, [apiResponse]);


    if (trendingData != null)
        return (
            <div className="trending rightPanelColor">
                <div className="whatsHappening rightPanelColor">{trendingData.title}</div>
                <TrendingList trending={trendingData} />
                <div className="showMore rightPanelColor">
                    <a className="showMoreAnchor rightPanelColor">Show more</a>
                </div>
            </div>
        )
}
export default Trending;