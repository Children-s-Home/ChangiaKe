import RelatedArticleImg from "/images/article_assets/children-in-class.png"
import { related_articles } from "./data";

function RelatedArticle(){
    const relatedArticleData = related_articles.map((related_section)=>{
        return(
            <div className="individual-related-article" key={related_section.id}>
                <img src={related_section.img} alt="children in class" />
                <p className='date'>{related_section.date}</p>
                <h3>related_section.heading</h3>
                <p className="author">{related_section.author}</p>
            </div>
        )
    })
    return(
        <div className="related-articles">
            <div className="related-articles-heading">
                <h1>Related Articles</h1>
            </div>
            <div className="individual-related-articles">
                {relatedArticleData}
            </div>
        </div>
    )
}
export default RelatedArticle;