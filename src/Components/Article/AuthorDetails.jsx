import Author from "/images/article_assets/author.png"
function AuthorDetails(){
    return(
        <div>
            <div className="author-details">
                <div>
                    <img src={Author} alt="" />
                </div>
                <div className="author-details-words">
                    <h2>Susan Kihika</h2>
                    <p>29 June 2023 • 7 min read</p>
                </div>
            </div>
            <div className="line"></div> 
        </div>
    )
}
export default AuthorDetails;