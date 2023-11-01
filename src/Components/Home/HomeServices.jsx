import service1 from '/images/Home/service1.png';
import service2 from '/images/Home/service2.png';
import service3 from '/images/Home/service3.png';

function HomeServices(){
    return(
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
    )
}

export default HomeServices;