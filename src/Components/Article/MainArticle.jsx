import ArticleImg from "/images/article_assets/child-with-ball.png"
import { article, author_details } from './data'


function MainArticle(){
    const articleSection = article.map((section)=>{
        return(
          <div key={section.id}>
            <h3>{section.h1}</h3>
            <p>{section.p}</p>
          </div>
        )
      });
    return(
        <div className='article-words'>
            {articleSection}
            <div className='articleImage'>
                <img src={ArticleImg} alt="" />
            </div>
            <h3>Additional Tips to volunteering: </h3>
            <div className='articleSpan'>
                <p><span>Be flexible.</span> Things don't always go according to plan, so be prepared to be flexible with your schedule and your expectations.</p>
                <p><span>Be positive.</span> A positive attitude can go a long way in making your volunteer experience more enjoyable.</p>
                <p><span>Be respectful.</span> Show respect for the people you're volunteering with, the organization you're volunteering for, and the community you're serving..</p>
            </div>
            <p>Volunteering is a great way to make a difference in the world. By following these tips, you can have a positive and rewarding volunteer experience</p>
      </div>
    )
}
export default MainArticle;