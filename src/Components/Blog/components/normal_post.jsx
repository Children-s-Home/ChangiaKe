import React from "react";

export default function Blog_normal_post(props) {
    return (
        <div className="pk_blog_posts_normal_post">
            <img src={props.details['image_url']} alt="" />
            <span className="pk_blog_posts_date">{props.details['date']}</span>
            <span className="pk_blog_posts_title">{props.details['title']}</span>
            <span className="pk_blog_posts_author">{props.details['author']}</span>
        </div>
    )
}