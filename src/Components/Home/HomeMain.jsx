import MainPic from '/images/Home/mainpic.png';

function HomeMain(){
        return(
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
    )
}

export default HomeMain;