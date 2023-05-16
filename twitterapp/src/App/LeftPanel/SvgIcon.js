function SvgIcon({svgData}){
    console.log("Svg Data: "+svgData);
    return(
        <img src={svgData} className="leftPanelIcon"></img>
    )
}
export default SvgIcon;