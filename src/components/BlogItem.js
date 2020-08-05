import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


export default function BlogItem(props) {
    const {objectId,title,author,subject,article} = props.blog
    return (
        
            
            <div className='ui card' style={{width:'75%',padding:'20px'}}>
                  
                    <div className='content'>
                        <div className='header'>{title}</div>
                        <br />
                         <div className='meta'>Author: {author}</div>
                        <br/>
                        <div className='meta'>Subject: {subject}</div>
                        <hr/>
                        <div className='description'>{article}</div>
                    </div>
                    <div>
                        <button className='ui primary button' 
                            
                            onClick={() => {
                            props.onDelete(objectId)
                        }}
                        >
                            Delete</button>
                    </div>
                    <Button className='ui primary button' onClick= {() => {props.onUpdate(objectId)}} >Update</Button>
                </div>
                
    )
       
}

BlogItem.propTypes = {
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    blog: PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        article: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        objectId: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.symbol,
          PropTypes.number
        ]).isRequired
        
  
      })
  }
  