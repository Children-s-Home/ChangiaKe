import { services } from './data';

function HomeServices(){
    const serviceSection  = services.map((service_section)=>{
        return(
            <div className="service-one" key={service_section.id}>
                <img src={service_section.image_source} alt="" />
                <h4>{service_section.heading}</h4>
                <p>{service_section.paragraph}</p>
                <button><a href="/DonationVolunteeringFundraising">Read More</a></button>
            </div>
        );
    });
    return(
        <div className="services">
            <div className="services-heading">
                <h2><span className="black">Our </span><span className="orange">Services</span></h2>
            </div>
            <div className="services-overall">
                {serviceSection}
            </div>
        </div>
    );
}

export default HomeServices;