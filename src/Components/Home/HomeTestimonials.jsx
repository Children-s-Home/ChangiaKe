import testimonial from '/images/Home/testimonial.png';

function HomeTestimonials(){
    return(
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
    )
}

export default HomeTestimonials;