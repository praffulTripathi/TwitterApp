import { useContext, useState, useEffect } from "react";
import { APIResponseContext } from "../Providers/APIContext";
import SvgIcon from "./SvgIcon";
import NavigationIcon from "./NavigationIcon";

function ListItems() {
  const [listItems, setListItems] = useState(null);
  const [listSVGs, setListSVGs] = useState(null);
  const apiResponse = useContext(APIResponseContext);

  useEffect(() => {
    setListItems(apiResponse?.["sideNavigationButtons"]);

    const fetchSVGData = async (svgURL) => {
      const data = await fetch(svgURL)
        .then((response) => {
          if (response.ok) return response.text();
          return Promise.reject(response);
        })
        .then((data) => {
          const regex = /fill="(.*?)"/g;
          const widthRegex = /width="(.*?)"/g;
          const heightRegex = /height="(.*?)"/g;
          const modifiedData = data
            .replace(regex, `fill="#FFF"`)
            .replace('<?xml version="1.0"?>', " ")
            .replace(widthRegex, "width=\"100%\"")
            .replace(heightRegex, "height=\"100%\"");
          return modifiedData;
        });
      return data;
    };

    const fillSVGColor = async () => {
      if (apiResponse?.["sideNavigationButtons"]) {
        const promises = apiResponse?.["sideNavigationButtons"].map(
          (navigationButton) => {
            const svgURL = navigationButton.icon.url;
            return fetchSVGData(svgURL);
          }
        );

        const allSVGModifiedData = await Promise.all(promises);
        if (allSVGModifiedData) setListSVGs(allSVGModifiedData);
        return allSVGModifiedData;
      }
    };

    if (apiResponse?.["sideNavigationButtons"]) {
      const modifiedSVGs = fillSVGColor();
    }
  }, [apiResponse]);

  if (listItems != null && listSVGs != null)
    return listItems.map((item, index) => {
      return (
        <a href={item.actionUrl} className="left-list-item" key={index}>
          <div className="icon">
            <NavigationIcon index={index} listSVG={listSVGs}></NavigationIcon>
          </div>
          <div className="leftPanelItemTitle">{item.buttonText}</div>
        </a>
      );
    });
}
export default ListItems;
