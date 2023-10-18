import React from 'react'
import "./Article.css"
import AuthorDetails from './AuthorDetails'
import MainArticle from './MainArticle'
import RelatedArticles from "./RelatedArticles"
import Thumbnail from './Thumbnail'

function Article(){
  return (
    <div className='main-article'>
      <Thumbnail/>
      <AuthorDetails/>
      <MainArticle/>
      <RelatedArticles/>
    </div>

  )
}

export default Article;