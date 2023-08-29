import './blog.css'

import Navbar from '../Navbar/Navbar'

// Hi😁👋, Please only take the div with class pk_blog_posts_body

const Blog = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <header>
        <div className="pk_blog_posts_header">
          <img style={{position:'absolute', left: '30px', top: 'auto'}} src={logo} alt=""/>
          <span>About us</span>
          <span>Discover</span>
          <span>Services</span>
          <span>Blog</span>
          <div className="pk_blog_posts_profile_container">
            <img src={profile_icon} alt=""/>
            <span>Me</span>
            <img src={drop_down_icon} alt=""/>
          </div>
        </div>
      </header> */}


      <div className="pk_blog_posts_body">
        <h3>Trending</h3>

        <div className="pk_blog_posts_trending_container_main">
          <div className="pk_blog_posts_side_column">
          

            <div className="pk_blog_posts_normal_trending_post">
              <img  src="images/blog_assets/img2.svg"  alt=""/>
              <span className="pk_blog_posts_date">24 MARCH 2023</span>
              <span className="pk_blog_posts_title">The power of giving back to the community</span>
              <span className="pk_blog_posts_author">By Mabeya Esther</span>
            </div>

            <div className="pk_blog_posts_normal_trending_post">
              <img  src="images/blog_assets/img2.svg"  alt=""/>
              <span className="pk_blog_posts_date">24 MARCH 2023</span>
              <span className="pk_blog_posts_title">The power of giving back to the community</span>
              <span className="pk_blog_posts_author">By Mabeya Esther</span>
            </div>

          </div>


          <div className="pk_blog_posts_headline_trending_post">
            <img  src="images/blog_assets/img1.svg" alt=""/>
            <div className="pk_blog_posts_headline_content">
              <span className="pk_blog_posts_title">I met my best friend while volunteering</span>
              <span className="pk_blog_posts_preview">
                I've always been a big believer in the power of volunteering. It's a great way to give back to
                your community, and it&apos;s also a great way...

              </span>
              <span className="pk_blog_posts_read_time">10 min read</span>
              <span className="pk_blog_posts_headline_button">
                Read more
              </span>
            </div>
          </div>

          <div className="pk_blog_posts_side_column">

            <div className="pk_blog_posts_normal_trending_post">
              <img  src="images/blog_assets/img2.svg"  alt=""/>
              <span className="pk_blog_posts_date">24 MARCH 2023</span>
              <span className="pk_blog_posts_title">The power of giving back to the community</span>
              <span className="pk_blog_posts_author">By Mabeya Esther</span>
            </div>

            <div className="pk_blog_posts_normal_trending_post">
              <img src="images/blog_assets/img2.svg"  alt=""/>
              <span className="pk_blog_posts_date">24 MARCH 2023</span>
              <span className="pk_blog_posts_title">The power of giving back to the community</span>
              <span className="pk_blog_posts_author">By Mabeya Esther</span>
            </div>

          </div>

        </div>

        <h2>Other posts</h2>
        <div className="pk_blog_posts_other_posts_container_main">

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img2.svg"  alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img2.svg"  alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img2.svg"  alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img3.svg"  alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img3.svg" alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img3.svg" alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>


          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img4.svg" alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img4.svg" alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>

          <div className="pk_blog_posts_normal_post">
            <img  src="images/blog_assets/img4.svg" alt=""/>
            <span className="pk_blog_posts_date">24 MARCH 2023</span>
            <span className="pk_blog_posts_title">Hello wold</span>
            <span className="pk_blog_posts_author">By Mabeya Esther</span>
          </div>
        </div>

        <button className="pk_blog_posts_more_content_button">
          Load More
        </button>


      </div>

      <footer>
        <div className="pk_blog_posts_footer_main_container">

          <div className="pk_blog_posts_quick_links_container">

            <div className="pk_blog_posts_quick_links_column">
              <span>Contact Us</span>
              <span>About us</span>
              <span>Services</span>
              <span>Blog</span>
            </div>

            <div className="pk_blog_posts_quick_links_column">
              <span>Cookies Policies</span>
              <span>Privacy Notice</span>
              <span>Terms and Conditions</span>
              <span>Report</span>
            </div>

          </div>


          <div className="pk_blog_posts_newsletter_registration_container">
            <h4>Sign up for the newsletter</h4>
            <span>
              This newsletter gives you a reminder of the events you reserved and the upcoming events that may
              interest you.
            </span>

            <div className="pk_blog_posts_sign_up_registration_form">
              <input type="email" placeholder="Enter your email" />
              <button>SUBMIT</button>
            </div>

            <div className="pk_blog_posts_social_media_links">
              <img src="images/blog_assets/twitter.svg" alt=""/>
              <img src="images/blog_assets/instagram.svg" alt=""/>
              <img src="images/blog_assets/linkedin.svg" alt=""/>
              <img src="images/blog_assets/facebook.svg" alt=""/>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Blog