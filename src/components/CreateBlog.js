import React, { Component } from 'react'
import PropTypes from 'prop-types'


class CreateBlog extends Component{
    constructor(props){
        super(props)
        this.state={
            blog:{
                title:'',
                author:'',
                subject:'',
                article:'',
                objectId: Date.now()
            }
         
        }
    }

    handleChange = (event) => {
        let updatedBlog = {...this.state.blog}
        updatedBlog[event.target.name] = event.target.value
        this.setState({
            blog:updatedBlog
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        let blog = {title:"", author:'',subject:'',article:'',objectId: Date.now()}
        
        this.props.handleBlogSubmit(event,this.state.blog)
        this.setState({
            blog
        })

    }


    render(){
        return(
            <div style={{margin:'40px'}}>
                <h1>Create Blog:</h1>
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <div className='equal width fields' style={{display:'flex', flexDirection:'column', justifyContent:"center",alignItems:'center',flexWrap:'wrap',width:'50%'}}>
                        <div className='field'>
                            <label htmlFor='author'>Author</label>
                            <div className='ui fluid input'>
                                <input type='text' name='author' value={this.state.blog.author} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='field'>
                            <label htmlFor='title'>Title</label>
                            <div className='ui fluid input'>
                                <input type='text' name='title' value={this.state.blog.title} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='field'>
                            <label htmlFor='subject'>Subject</label>
                            <div className='ui fluid input'>
                                <input type='text' name='subject' value={this.state.blog.subject} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='field'>
                            <label htmlFor='article'>Article</label>
                            <div className='ui fluid input'>
                                <textarea type='text' name='article' cols="30" row="10" value={this.state.blog.article} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='ui button green'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default CreateBlog


CreateBlog.propTypes = {
    handleBlogSubmit: PropTypes.func
  
  }
  