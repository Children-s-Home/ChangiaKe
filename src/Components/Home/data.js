import service1 from '/images/Home/service1.png';
import service2 from '/images/Home/service2.png';
import service3 from '/images/Home/service3.png';
import cause1 from '/images/Home/cause1.png';
import cause2 from '/images/Home/cause2.png';
import location from '/images/Home/location.png';
import comments from '/images/Home/comments.png';
import like from '/images/Home/like.png';
import blog from '/images/Home/blog.png';

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
const main_blog=[
    {
        heading:"5 things to know before volunteering at a  children's home",
        paragraph:"Your donation will help us to continue our work and make a difference in the world. Every dollar counts, and we are grateful for your support. I've volunteered in a variety of capacities, including tutoring students, helping with fundraising events, and working on community projects. Each experience has been different, but they've all been equally rewarding. Together, we can make a difference.",
        like_image:like,
        like_number:"3 likes",
        comment_image:comments,
        comment_number:"1 comment",
        main_image:blog
    }
]
const mini_blog=[
    {
        id:1,
        heading:"How giving makes life fulfilling",
        paragraph:"You've decided to volunteer this weekend but you don't know what to expect from that experience. Look no further."
    },
    {
        id:2,
        heading:"Environmental Day in Karura forest",
        paragraph:"You've decided to volunteer this weekend but you don't know what to expect from that experience. Look no further."
    },
    {
        id:3,
        heading:"Talent Show in Light Kids Home",
        paragraph:"You've decided to volunteer this weekend but you don't know what to expect from that experience. Look no further."
    }
]

export {services, causes, main_blog, mini_blog};