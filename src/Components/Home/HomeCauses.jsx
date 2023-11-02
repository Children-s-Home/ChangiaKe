import { causes } from './data';

function HomeCauses(){
    const causeData = causes.map((cause_section)=>{
        return(
            <div className="cause-one">
                <img className='larg-img' src={cause_section.main_image} alt="giving hands" /><br/>
                <div className="location">
                    <img src={cause_section.location_image_source} alt="" />
                    <p>{cause_section.location}</p>
                </div>
                <h4>{cause_section.heading}</h4>
                <p>{cause_section.paragraph}</p>
                <div className="overall-buttons">
                    <button className='btn3'><a href="/DonationVolunteeringFundraising">Donate</a></button>
                    <button className='btn4'><a href="/Blog">Read More</a></button>
                </div>
            </div>
        )
    })
    return(
        <div className="causes">
            <div className="causes-header">
                <h3><span className="orange">Causes </span><span className="black">you should look out for</span></h3>
            </div>
            <div className="causes-overall">
                {causeData}
            </div>
        </div>
    )
}

export default HomeCauses;