import React from 'react'
import PropTypes from "prop-types"

const PRIMARY_BUTTON = "primary";
const SECONDARY_BUTTON ="secondary";

const Button = (props) => {
    const {label,buttontype,fullwidth,children,onClick,className,type,...rest}=props;
    let classes="button " + className;
    if (fullwidth ){
        classes += " button-full-width"
    }
      
    if(buttontype===PRIMARY_BUTTON){
        classes+= ""
    }else if (buttontype===SECONDARY_BUTTON){
        classes+=" button-secondary"
    }
    
  return (
    <button className={classes} onClick={onClick} {...rest} type={type}>
        {label? label : children}</button>
  )
}

Button.defaultProps ={
    // label : "button",
    type:"type",
    fullwidth : false,
    onClick : ()=>{}
}

Button.propTypes={
    // label : PropTypes.string,
    type:PropTypes.string,
    fullwidth : PropTypes.bool,
    onClick : PropTypes.func,
}

export default Button;