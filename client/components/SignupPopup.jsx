import React, { useState, useEffect, Fragment } from 'react';

const SignupPopup = props => {
    
    const handleSave = () => {
        props.toggleSignupPopup();
      };

    return (
        <div className = 'popup'>
            <div className = 'popup_inner'>
        <form onSubmit={props.handleSubmit}>
        <span className= "closeButton" onClick={handleSave}> <img className="closeButton-img" src="https://static.thenounproject.com/png/6448-200.png" alt="x"/></span>
            <p className="signup-header" >Sign-up:</p>
            <div>
            <label className="sign-up-titles">
                First name: <input className="sign-up-input" type = "text" name = "firstname" onChange = {props.firstnameHandler}/>
            </label>
            </div>
            <div>
            <label className="sign-up-titles">
                Last name: <input className="sign-up-input" type ="text" name = "lastname"onChange = {props.lastnameHandler}/>
            </label>
            </div>
            
            <div>
            <label className="sign-up-titles">
                Email: <input className="sign-up-input" type = "text"name = "email"onChange = {props.emailHandler}/>
            </label>
            </div>

            <div>
            <label className="sign-up-titles">
                Password: <input className="sign-up-input" type = "password"name = "password"onChange = {props.passwordHandler}/>
            </label>
            </div>
            <input className= "sign-up-submit" type = "submit" value = "Submit" />
        </form>
        </div> 
        </div>
    )
}

export default SignupPopup;