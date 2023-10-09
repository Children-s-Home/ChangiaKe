import React from 'react'
import "./Article.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import ArticleThmubnail from "../../../public/images/article_assets/article-thumbnail.png"
import Author from "../../../public/images/article_assets/author.png"
import ArticleImg from "../../../public/images/article_assets/child-with-ball.png"
import RelatedArticle from "../../../public/images/article_assets/children-in-class.png"

const Article = () => {
  return (
    <div className='main-article'>
      <div className="article-thmubnail">
        <img src={ArticleThmubnail} alt="thumbnail of article" />
      </div>
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
      <div className='article-words'>
        <p>At some point, many of us declare that we want to volunteer more. We might start volunteering somewhat accidentally.Volunteering is a great way to give back to your community, make a difference in the lives of others, and learn new skills. But before you jump into volunteering, there are a few things you need to know.</p>
        <h3>1. Know  your Why</h3>
        <p>Why do you want to volunteer? What are you hoping to get out of the experience? Are you looking to make a difference in the world, learn new skills, or meet new people? Once you know your why, you can start to find volunteer opportunities that align with your goals.</p>
        <h3>2. Do your Research</h3>
        <p>Not all volunteer opportunities are created equal. Some organizations are well-run and have a clear mission, while others may be less organized or have a different focus. Before you commit to a volunteer opportunity, take some time to research the organization and make sure it's a good fit for you.</p>
        <h3>3. Be realistic about your time commitment</h3>
        <p>Volunteering can be a great way to give back to your community, but it's important to be realistic about your time commitment. How much time can you realistically commit to volunteering each week or month? If you're only able to volunteer a few hours a month, you'll need to find an opportunity that fits your schedule.</p>
        <h3>4. Be prepared to learn</h3>
        <p>Volunteering is a great way to learn new skills and knowledge. You may be able to learn about a new cause, develop your leadership skills, or learn a new trade. Be open to learning new things and be willing to step outside of your comfort zone.</p>
        <h3>5. Have fun</h3>
        <p>Volunteering should be enjoyable. If you're not having fun, you're less likely to stick with it. Find an opportunity that you're passionate about and that you'll enjoy spending your time on.
          Volunteering can be a rewarding experience that can benefit both you and the community. By following these tips, you can find a volunteer opportunity that's a good fit for you and that you'll enjoy.
        </p>
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
      <div className="related-articles">
        <div className="related-articles-heading">
          <h1>Related Articles</h1>
        </div>
        <div className="individual-related-articles">
          <div className="individual-related-article">
            <img src={RelatedArticle} alt="children in class" />
            <p className='date'>24 MARCH 2023</p>
            <h3>How your Donations are making a difference</h3>
            <p className="author">By Joan Wangu</p>
          </div>
          <div className="individual-related-article">
            <img src={RelatedArticle} alt="children in class" />
            <p className='date'>24 MARCH 2023</p>
            <h3>How to choose the right charity to donate to.</h3>
            <p className="author">By Lilian Mudi</p>
          </div>
          <div className="individual-related-article">
            <img src={RelatedArticle} alt="children in class" />
            <p className='date'>24 MARCH 2023</p>
            <h3>Donation is not always about the money.</h3>
            <p className="author">By Anthony Smith</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Article