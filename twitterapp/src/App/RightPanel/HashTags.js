function HashTags({hashTags}) {
    if (hashTags !== undefined){
        return (
            hashTags.map((hashTag) => {
                return(<span className="hashTag" key={hashTag}>{hashTag}</span>)
                
            })
        )
    }
}
export default HashTags;