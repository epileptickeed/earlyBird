import React from 'react'
import blogs from '../../data/blogs.json'

const Blog = () => {



  return (
    <div className='blog'>
      <div className="blog_header">
        <h1>RECENT BLOG POSTS EXPLORE</h1>
        <button>READ ALL NEWS</button>
      </div>

      <div className="blog_posts">
        {blogs.map((item, index) => {
          return (
            <div key={index} className='blog_card'>
              <img src={item.image} alt={item.title} />
              <div className='blog_card__info'>
                <span>{item.date} | {item.name}</span>
                <h1>{item.title}</h1>
                <button>View More</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog