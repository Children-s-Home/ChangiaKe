import './Home.css';
import MainPic from '../../assets/mainpic.png';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import testimonial from '../../assets/testimonial.png';
import cause1 from '../../assets/cause1.png';
import cause2 from '../../assets/cause2.png';
import location from '../../assets/location.png';
import blog from '../../assets//blog.png';
import comments from '../../assets/comments.png';
import like from '../../assets/like.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';

function Home() {
  return (
    <div className="Main">
        <div className="home-box">
            {/* <nav>
                <div className="logo">
                    <p><a href="#"><span className="orange">Chang</span><span className="black">ia</span></a></p>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="/AboutUs">About us</a></li>
                        <li><a href="/DonationVolunteeringFundraising">Discover</a></li>
                        <li><a href="/SearchResults">Services</a></li>
                        <li><a href="/Blog">Blog</a></li>
                        <button className='btn1'><a href="/Register">Sign Up</a></button>
                        <button className='btn2'><a href="/LogIn">Sign In</a></button>
                    </ul>
                </div>
            </nav> */}
            <div className="home-content">
                <div className="home-words">
                    <h3><span className="black">Give back</span><span className="orange"> to your community.</span><br/><span className="orange"> Find a</span><span className="black"> children's home </span><span className="orange">near<br/>you.</span></h3>
                    <input type="text" placeholder= "enter the address or name of the childrens' home" /><br/>
                    <button><a href="/DonationVolunteeringFundraising">Donate Now</a></button>
                </div>
                <div className="home-image">
                    <img src={MainPic} alt="" />
                </div>
            </div>
        </div>
        <div className="about-mission">
            <h3 className='about-topic'><span className="black">About </span><span className="orange">Us</span></h3>
            <p>We are a non-profit organization dedicated to making a difference in the world. We believe that everyone has the power to make a difference, and we are committed to providing the resources and support to make that happen. We offer a variety of ways to donate, including online donations, text-to-give, and in-person donations. We also offer a variety of volunteer opportunities, so you can get involved in the work we do. Your donation will help us to continue our work and make a difference in the world. We are grateful for your support.</p>
            <h3><span className="orange">Our </span><span className="black">Mission</span></h3>
            <p>Our mission is to empower people to make a difference in the world. We do this by providing resources and support to individuals and organizations who are working to make the world a better place. We believe that everyone has the power to make a difference, and we are committed to helping people to realize their potential. We believe that by working together, we can create a more just, equitable, and sustainable world.</p>
        </div>
        <div className="services">
            <div className="services-heading">
                <h2><span className="black">Our </span><span className="orange">Services</span></h2>
            </div>
            <div className="services-overall">
                <div className="service-one">
                    <img src={service1} alt="" />
                    <h4>Donation</h4>
                    <p>Your donation will help us to continue our work and make a difference in the world. Every dollar counts.</p>
                    <button><a href="/DonationVolunteeringFundraising">Read More</a></button>
                </div>
                <div className="service-one">
                    <img src={service2} alt="" />
                    <h4>Fundraising</h4>
                    <p>We can come together and contribute to support our communities. Together, we can make a difference.</p>
                    <button><a href="/DonationVolunteeringFundraising">Read More</a></button>
                </div>
                <div className="service-one">
                    <img src={service3} alt="" />
                    <h4>Volunteering</h4>
                    <p>If you are interested in volunteering, please contact us. We have a variety of volunteer opportunities available.</p>
                    <button><a href="/DonationVolunteeringFundraising">Read More</a></button>
                </div>
            </div>
        </div>
        <div className="testimonials">
            <div className="testimonials-header">
                <h3><span className="orange">Testimonials </span><span className="black">from our volunteers</span></h3>
            </div>
            <div className="testimonials-overall">
                <img src={testimonial} alt="" />
                <div className="testimonails-words">
                    <p>I've volunteered in a variety of capacities, including tutoring students, helping with fundraising events, and working on community projects. Each experience has been different, but they've all been equally rewarding.</p>
                    <p><span className="brown">Njuri Ncheke - Inua Dada</span></p>
                </div>
            </div>
            <div className="main-dots">
                <div className="dot-one"></div>
                <div className="dot-two"></div>
                <div className="dot-three"></div>
            </div>
        </div>
        <div className="causes">
            <div className="causes-header">
                <h3><span className="orange">Causes </span><span className="black">you should look out for</span></h3>
            </div>
            <div className="causes-overall">
                <div className="cause-one">
                    <img className='larg-img' src={cause1} alt="" /><br/>
                    <div className="location">
                        <img src={location} alt="" />
                        <p>Kibera</p>
                    </div>
                    <h4>Providing healthy food for children</h4>
                    <p>Your donation will help us to continue our work and make a difference in the world. Every dollar counts.</p>
                    <div className="overall-buttons">
                        <button className='btn3'><a href="/DonationVolunteeringFundraising">Donate</a></button>
                        <button className='btn4'><a href="/Blog">Read More</a></button>
                    </div>
                </div>
                <div className="cause-one">
                    <img className='larg-img' src={cause2} alt="" /><br/>
                    <div className="location">
                        <img src={location} alt="" />
                        <p>Ngong</p>
                    </div>
                    <h4>Providing shoes to the kids in Hope children's home.</h4>
                    <p>We can come together and contribute to support our communities. Together, we can make a difference.</p>
                    <div className="overall-buttons">
                        <button className='btn3'><a href="/DonationVolunteeringFundraising">Donate</a></button>
                        <button className='btn4'><a href="/Blog">Read More</a></button>
                    </div>
                </div>
                <div className="cause-one">
                    <img className='larg-img' src={cause1} alt="" /><br/>
                    <div className="location">
                        <img src={location} alt="" />
                        <p>Syokimau</p>
                    </div>
                    <h4>Picking up trash around Syokimau estate.</h4>
                    <p>If you are interested in volunteering, please contact us. We have a variety of volunteer opportunities available.</p>
                    <div className="overall-buttons">
                        <button className='btn3'><a href="/DonationVolunteeringFundraising">Donate</a></button>
                        <button className='btn4'><a href="/Blog">Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
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
        {/* <footer>
            <div className="footer-overall">
                <div className="pages">
                    <ul>
                        <li><a href="/AboutUs">Contact Us</a></li>
                        <li><a href="/AboutUs">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="/Blog">Blog</a></li>
                    </ul>
                </div>
                <div className="notice">
                    <ul>
                        <li><a href="">Cookies Policy</a></li>
                        <li><a href="">Privacy Notice</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Report</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h4>Sign up for the Newsletter</h4>
                    <p>This newsletter gives you a reminder of the events you<br/>reserved and the upcoming events that may interest you.</p>
                    <div className="input-button">
                        <input type="text" placeholder='Enter your email'/>
                        <button><a href="">SUBMIT</a></button>
                    </div>
                    <div className="icons">
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
        </footer> */}
    </div>
  );
}

export default Home;
