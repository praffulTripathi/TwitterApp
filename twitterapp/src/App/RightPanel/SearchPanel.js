import searchIcon from "../../assets/searchIcon.svg"
function SearchPanel(){
    return(
        <div className="SearchTwitter">
            <span className="searchIconSpan">
                <img src={searchIcon} className="searchIcon"></img>
            </span>
            <input type="text" className="searchInput" placeholder="Search Twitter"></input>
        </div>
    )
}
export default SearchPanel;