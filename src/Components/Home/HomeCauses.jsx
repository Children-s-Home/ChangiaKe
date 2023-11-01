import cause1 from '/images/Home/cause1.png';
import cause2 from '/images/Home/cause2.png';
import location from '/images/Home/location.png';

function HomeCauses(){
    return(
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
    )
}

export default HomeCauses;