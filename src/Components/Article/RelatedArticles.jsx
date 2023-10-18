import RelatedArticleImg from "/images/article_assets/children-in-class.png"

function RelatedArticle(){
    return(
        <div className="related-articles">
            <div className="related-articles-heading">
                <h1>Related Articles</h1>
            </div>
            <div className="individual-related-articles">
                <div className="individual-related-article">
                    <img src={RelatedArticleImg} alt="children in class" />
                    <p className='date'>24 MARCH 2023</p>
                    <h3>How your Donations are making a difference</h3>
                    <p className="author">By Joan Wangu</p>
                </div>
                <div className="individual-related-article">
                    <img src={RelatedArticleImg} alt="children in class" />
                    <p className='date'>24 MARCH 2023</p>
                    <h3>How to choose the right charity to donate to.</h3>
                    <p className="author">By Lilian Mudi</p>
                </div>
                <div className="individual-related-article">
                    <img src={RelatedArticleImg} alt="children in class" />
                    <p className='date'>24 MARCH 2023</p>
                    <h3>Donation is not always about the money.</h3>
                    <p className="author">By Anthony Smith</p>
                </div>
            </div>
        </div>
    )
}
export default RelatedArticle;