import React from 'react'
import PropTypes from "prop-types"

const PRIMARY_BUTTON = "primary";
const SECONDARY_BUTTON ="secondary";

const Button = (props) => {
    const {label,type,isFullWidth,children,onClick,...rest}=props;
    let classes="button";
    if (isFullWidth ){
        classes += " button-full-width"
    }
      
    if(type===PRIMARY_BUTTON){
        classes+= ""
    }else if (type===SECONDARY_BUTTON){
        classes+=" button-secondary"
    }
    
  return (
    <button className={classes} onClick={onClick} {...rest}>
        {label? label : children}</button>
  )
}

Button.defaultProps ={
    label : "Button",
    isFullWidth : false,
    onclick : ()=>{}
}

Button.propTypes={
    label : PropTypes.string,
    isFullWidth : PropTypes.bool,
    onclick : PropTypes.func,
}

export default Button;