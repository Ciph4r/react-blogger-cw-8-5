import React from 'react'
import PropTypes from 'prop-types'



const Button = ({className , onClick , children}) => {


    
        return (
            <div>
            <button className= {className} 
                
                onClick={onClick}
            >
                {children}
                </button>
        </div>
         )
     }
    
    export default Button



    Button.propTypes = {
        onClick: PropTypes.func,
        className: PropTypes.string,
        children: PropTypes.node
      
      }
      