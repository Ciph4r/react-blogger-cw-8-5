import React, { Component } from 'react'

class Binder extends Component{
    constructor(){
        super()
        this.state = {
            text: ''
        }
        // this.handleClickMe = this.handleClickMe.bind(this)
    }
    handleClickMe(){
        this.setState({
            text: 'You see me now'
        })
    }  
    render(){
        return(
            <div>
                        <h1>{this.state.text}</h1>
            <button className='ui primary button' 
                            
            onClick={this.handleClickMe.bind(this)}
        >
            Delete</button>
            </div>

        )
    }
}


export default Binder