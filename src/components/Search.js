import React from 'react'

export default function Search(props) {
    return (
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center',flexDirection:'column' , marginBottom:'40px'}}>
            <h2>Search Blog By Subject:</h2>
            <form className='ui form'>
                    <div className='field'>
                    <input  type='text' placeholder='Search By subject...' value={props.searchTerm} onChange={props.handleChange}>

                    </input>
                    </div>
 
                  </form>
        </div>
    )
}
