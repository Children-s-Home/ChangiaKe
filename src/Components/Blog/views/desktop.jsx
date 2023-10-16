import React, { useState } from "react";
import Blog_normal_post from "../components/normal_post";
import Blog_normal_trending_post from "../components/normal_tranding_post";
import Blog_trending_headline from "../components/headline_trending_post";

export default function Blog_desktop_view(){
    var posts=[
        {'image_url':'images/blog_assets/img2.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img2.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img2.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img3.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img3.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img3.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img4.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img4.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
        {'image_url':'images/blog_assets/img4.svg','date':'24 MARCH 2023','title':'Hello world','author':'By Mabeya Esther'},
    ]

    const [other_posts, set_other_posts]=useState(posts)


    return (
        <div className="pk_blog_posts_body">
            <h3>Trending</h3>

            <div className="pk_blog_posts_trending_container_main">
                <div className="pk_blog_posts_side_column">

                    <Blog_normal_trending_post/>
                    <Blog_normal_trending_post/>

                </div>


                <Blog_trending_headline/>

                

                <div className="pk_blog_posts_side_column">

                    <Blog_normal_trending_post/>
                    <Blog_normal_trending_post/>

                </div>

            </div>

            <h2>Other posts</h2>
            <div className="pk_blog_posts_other_posts_container_main">

                {
                other_posts.map((post, i)=>{
                    return (<Blog_normal_post key={i} details={post} />)
                })
                }

                
            </div>

            <button className="pk_blog_posts_more_content_button">
                Load More
            </button>


        </div>
    )
}