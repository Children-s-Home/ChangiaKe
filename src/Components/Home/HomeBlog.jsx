import blog from '/images/Home/blog.png';
import comments from '/images/Home/comments.png';
import like from '/images/Home/like.png';

function HomeBlog(){
    return(
        <div className="blog">
            <div className="blog-header">
                <h3>Read more articles on our <span className="orange">Blog</span></h3>
            </div>
            <div className="blog-overall">
                <div className="main-left">
                    <div className="main-left-words">
                        <h4>5 things to know before volunteering at a  children’s home</h4>
                        <p>
                            Your donation will help us to continue our work and make a difference 
                            in the world. Every dollar counts, and we are grateful for your support. 
                            I've volunteered in a variety of capacities, including tutoring students, 
                            helping with fundraising events, and working on community projects. Each 
                            experience has been different, but they've all been equally rewarding. 
                            Together, we can make a difference.
                        </p>
                        <div className="actions">
                            <div className="like">
                                <img src={like} alt="like" />
                                <p>3 likes</p>
                            </div>
                            <div className="comments">
                                <img src={comments} alt="like" />
                                <p>1 comment</p>
                            </div>
                        </div>
                        <button><a href="/Blog">Read More</a></button>
                    </div>
                    <div className="main-left-image">
                        <img src={blog} alt="blog image" />
                    </div>
                </div>
                <div className="main-right">
                    <div className="main-right-one">
                        <h3>How giving makes life fulfilling</h3>
                        <p>You’ve decided to volunteer this weekend but you don’t know what to expect from that experience. Look no further.</p>
                        <h4><a href="/Blog">Read More</a></h4>
                        <div className="line"></div>
                    </div>
                    <div className="main-right-two">
                        <h3>Environmental Day in Karura forest</h3>
                        <p>You’ve decided to volunteer this weekend but you don’t know what to expect from that experience. Look no further.</p>
                        <h4><a href="/Blog">Read More</a></h4>
                        <div className="line"></div>
                    </div>
                    <div className="main-right-three">
                        <h3>Talent Show in Light Kids Home</h3>
                        <p>You’ve decided to volunteer this weekend but you don’t know what to expect from that experience. Look no further.</p>
                        <h4><a href="/Blog">Read More</a></h4>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog;