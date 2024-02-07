import React, { useState, useEffect } from "react";
import {Navigate} from 'react-router-dom'
import UserDashboard from "./InvestorDash";
import Login from './login';

function Sitewindow(){

    

    //Handlers
    //Login-Type Change
    
    
    // //Form Submit
    // const handleFormSubmit = async e => {
    //     try {
    //         e.preventDefault();
    //         if(selectedLoginType == 'seeder-login'){
    //             const sendUser = await fetch(`http://localhost:5000/seeder-login/${userId}/${userPass}`);
    //             const data = await sendUser.json();

    //             if(sendUser.status == 200 && data.found){
    //                 setisLoggedIn(true);
    //             }else if(sendUser.status == 404){
    //                 setpopupMsg('Invalid Credentials !');
    //                 showPopupMessage();
    //             }
    //         }
    //         else if(selectedLoginType == 'buyer-login'){

    //         }
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // }

    //Popup Message
     // Function to show the popup for 3 seconds
        // const showPopupMessage = (message) => {
        //     setShowPopup({message});

        //     setTimeout(() => {
        //     setShowPopup(null);
        //     },5000); // 3000 milliseconds (3 seconds)
        // };

    
    

    return(
        <>
        
        <Login/>
        
        </>
    )
}

export default Sitewindow;