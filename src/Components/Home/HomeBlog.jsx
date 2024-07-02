import { main_blog } from './data';
import { mini_blog } from './data';

function HomeBlog(){
    const mainBlogSection= main_blog.map((main_blog_section)=>{
        return(
            <div className="main-left">
                <div className="main-left-words">
                    <h4>{main_blog_section.heading}</h4>
                    <p>{main_blog_section.paragraph}</p>
                    <div className="actions">
                        <div className="like">
                            <img src={main_blog_section.like_image} alt="like" />
                            <p>{main_blog_section.like_number}</p>
                        </div>
                        <div className="comments">
                            <img src={main_blog_section.comment_image} alt="comment" />
                            <p>{main_blog_section.comment_number}</p>
                        </div>
                    </div>
                    <button><a href="/Blog">Read More</a></button>
                </div>
                <div className="main-left-image">
                    <img src={main_blog_section.main_image} alt="blog image" />
                </div>
            </div>
        )
    })
    const miniBlogSection= mini_blog.map((mini_blog_section)=>{
        return(
            <div className="main-right-one" key={mini_blog_section.id}>
                <h3>{mini_blog_section.heading}</h3>
                <p>{mini_blog_section.paragraph}</p>
                <h4><a href="/Blog">Read More</a></h4>
                <div className="line"></div>
            </div>
        )
    })
    return(
        <div className="blog">
            <div className="blog-header">
                <h3>Read more articles on our <span className="orange">Blog</span></h3>
            </div>
            <div className="blog-overall">
                {mainBlogSection}
                <div className="main-right">
                    {miniBlogSection}
                </div>
            </div>
        </div>
    )
}

export default HomeBlog;