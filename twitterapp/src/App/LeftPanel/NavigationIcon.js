function NavigationIcon({index,listSVG}){
    const svgData = listSVG[index];
    return (
        <div dangerouslySetInnerHTML={{ __html: svgData }} className="leftPanelIcon" />
    )
}
export default NavigationIcon;