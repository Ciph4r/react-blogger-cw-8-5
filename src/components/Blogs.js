import React from 'react'
import searchIt from '../helper/searchIt'
import BlogItem from './BlogItem'
import PropTypes from 'prop-types'




const Blogs = (props) => {
  return (
    <div>
      <h2>Blogs</h2>
      {props.blogs.filter(searchIt(props.searchTerm)).map((blog,idx) => {
                return <BlogItem key={blog.objectId} blog = {blog} onDelete = {props.onDelete} onUpdate={props.onUpdate}/>
                
            })}
    </div>
  )
}


export default Blogs



Blogs.propTypes = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      objectId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.symbol,
        PropTypes.number
      ]).isRequired,
      subject: PropTypes.string.isRequired

    })
  ),
  searchTerm: PropTypes.string
}


