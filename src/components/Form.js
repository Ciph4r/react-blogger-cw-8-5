import React, { Component } from 'react'


class Form extends Component{
    constructor(){
        super()
        this.state={
            blog:{
                title:'',
                author:'',
                subject:'',
                article:'',
                objectId: Date.now()
            },
            blogs: []
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
        let updatedBlogs = [...this.state.blogs]
        updatedBlogs.unshift(this.state.blog)
        this.setState({
            blogs : updatedBlogs,
            blog
        },()=>{console.log(this)})


    }


    render(){
        return(
            <div style={{margin:'40px'}}>
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
                <hr/>
                {this.state.blogs.map((blog,idx) => {
                const {objectId,title,author,subject,article} = blog
                return (
                <div key={objectId} className='ui card' style={{width:'75%',padding:'20px'}}>
                  
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
                            this.onDelete(objectId)
                        }}
                        >
                            Delete</button>
                    </div>
                </div>
            
                )
            }
            )}
            </div>
        )
    }
}



export default Form