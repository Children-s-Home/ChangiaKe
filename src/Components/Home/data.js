import service1 from '/images/Home/service1.png';
import service2 from '/images/Home/service2.png';
import service3 from '/images/Home/service3.png';
import cause1 from '/images/Home/cause1.png';
import cause2 from '/images/Home/cause2.png';
import location from '/images/Home/location.png';

const services=[
    {
        id:1,
        image_source: service1,
        heading:"Donation",
        paragraph:"Your donation will help us to continue our work and make a difference in the world. Every dollar counts."
    },
    {
        id:2,
        image_source:service2,
        heading:"Fundraising",
        paragraph:"We can come together and contribute to support our communities. Together, we can make a difference."
    },
    {
        id:3,
        image_source:service3,
        heading:"Volunteering",
        paragraph:"If you are interested in volunteering, please contact us. We have a variety of volunteer opportunities available."
    },
]
const causes=[
    {
        id:1,
        main_image:cause1,
        location_image_source:location,
        location:"Kibera",
        heading:"Providing healthy food for children",
        paragraph:"Your donation will help us to continue our work and make a difference in the world. Every dollar counts."
    },
    {
        id:2,
        main_image:cause2,
        location_image_source:location,
        location:"Ngong",
        heading:"Providing shoes to the kids in Hope children's home.",
        paragraph:"We can come together and contribute to support our communities. Together, we can make a difference."
    },
    {
        id:3,
        main_image:cause1,
        location_image_source:location,
        location:"Syokimau",
        heading:"Picking up trash around Syokimau estate.",
        paragraph:"If you are interested in volunteering, please contact us. We have a variety of volunteer opportunities available."
    }
    
]

export {services, causes};