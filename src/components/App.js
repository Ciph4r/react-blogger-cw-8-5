import React, {Component} from 'react'
import blogs from '../data/data'
import Header from './Header'
import Search from './Search'
import CreateBlog from './CreateBlog'
import Blogs from './Blogs'






class App extends Component{
    state ={blogs,
            searchTerm : ""
          }

    onDelete = (id) => {
        const updatedBlog = this.state.blogs.filter((item)=> item.objectId !==id)

        this.setState({
            blogs: updatedBlog
        })
        console.log(`Delete ${id}`)
    }
      handleChange=(event) => {
        this.setState({
          searchTerm : event.target.value
        },
        () => {
          console.log(this.state.searchTerm)
        }
        )
      }
      handleBlogSubmit = (event , blog) => {
          event.preventDefault()
          let updatedBlogs = [blog, ...this.state.blogs]
          this.setState({
            blogs : updatedBlogs
          },() => {console.log(this.state.blogs)})
      }

      onUpdate = (objectId) => {
      
        console.log(objectId)
      }
      
    render(){

        return (
            <>
            <div 
                style={{
                marginTop:'100',
                display:'flext',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column'
                }}>
                    <Header/>
                    <div style={{width:'100%'}}> 
                    <Search searchTerm = {this.state.searchTerm} handleChange={this.handleChange} />
                    <hr style={{paddingLeft:'10px' , width:'100%'}} />
                    <CreateBlog handleBlogSubmit = {this.handleBlogSubmit} />
                    </div>
                    <div style={{width:'50%'}}>
                      <Blogs blogs={this.state.blogs} searchTerm= {this.state.searchTerm} onDelete = {this.onDelete} onUpdate= {this.onUpdate}/>
                    </div>
                   
            </div>
            </>

        )
    }
}




export default App