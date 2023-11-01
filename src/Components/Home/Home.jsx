import './Home.css';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import HomeMain from './HomeMain';
import HomeAbout from './HomeAbout';
import HomeServices from './HomeServices'
import HomeTestimonials from './HomeTestimonials';
import HomeCauses from './HomeCauses';
import HomeBlog from './HomeBlog';

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
            <HomeMain/>
        </div>
        <HomeAbout/>
        <HomeServices/>
        <HomeTestimonials/>
        <HomeCauses/>
        <HomeBlog/>
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
