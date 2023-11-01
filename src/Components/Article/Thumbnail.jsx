import ArticleThmubnail from "/images/article_assets/article-thumbnail.png"

function Thumbnail(){
    return(
        <div className="article-thmubnail">
            <img src={ArticleThmubnail} alt="thumbnail of article" />
        </div>
    )
}
export default Thumbnail