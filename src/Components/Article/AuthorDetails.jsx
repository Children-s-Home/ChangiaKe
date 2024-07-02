import Author from "/images/article_assets/author.png"

import {author_details} from './data'

function AuthorDetails(){
    const authorSection = author_details.map((section)=>{
        return(
          <div className="author-details" key={section.id}>
                <div>
                    <img src={Author} alt="" />
                </div>
                <div className="author-details-words">
                    <h2>{section.name}</h2>
                    <p>{section.date}</p>
                </div>
          </div>
        )
      });
    return(
        <div>
            {authorSection}
            <div className="line"></div> 
        </div>
    )
}

export default AuthorDetails;