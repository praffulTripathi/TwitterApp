function HashTags({ hashTags }) {
  if (hashTags !== undefined) {
    return (
      <div className="hashTagList rightPanelColor">
        <div className="trendingWithText">Trending With</div>
        <div className="hashTags">
          {hashTags.map((hashTag) => {
            return (
              <span className="hashTag" key={hashTag}>
                {hashTag}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default HashTags;
