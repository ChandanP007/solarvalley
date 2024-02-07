import "../stylesheets/dashboard.css";
import React, { useState, useEffect } from "react";

//icons
import act1 from "../assets/speak.png";
import act2 from "../assets/check.png";
import act3 from "../assets/solar.png";
import act4 from "../assets/consumption.png";
import act5 from "../assets/connect.png";
import map from "../assets/map.jpg";







function InvestorDashboard(props) {

  //states
const article1 = {};
const article2 = {};
const article3 = {};


//News api
async function fetchNews(){
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=bb642677e2d543b790e7b84df0b56175`);
  const data = await response.json();
  
  
  
}

  return (
    <>
      <div className="userInfo">
        <h4>Welcome back! {props.useremail}</h4>
        <div className="usericon">
          <img src={props.userimg} alt="" />
          <h5>{props.usertype}</h5>
        </div>

      </div>
      <div className="userActions">
        <h3>User Actions</h3>
        <div className="item">
          <img src={act1} alt="" />
          <a href="">community talk</a>
        </div>
        <div className="item">
          <img src={act2} alt="" />
          <a href="">cheklist</a>
        </div>
        <div className="item">
          <img src={act3} alt="" />
          <a href="">my solars</a>
        </div>
        <div className="item">
          <img src={act4} alt="" />
          <a href="">consumptions</a>
        </div>
        <div className="item">
          <img src={act5} alt="" />
          <a href="">connect owners</a>
        </div>
      </div>
      <div className="community">
      <div className="solarmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.9792353159545!2d88.37897586746026!3d22.669156752414224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dbaf994a25f%3A0x39556f6adcfcfac3!2sS.H%20House%2012%20No%20satin%20sen%20pally!5e0!3m2!1sen!2sin!4v1705774912807!5m2!1sen!2sin" width="1100" height="553" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="openchannel">
          <div className="runningchat">
            <p>
              <b>Vivek : </b>Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Inventore, nam.
            </p>
            <p>
              <b>Rahul : </b>Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Inventore, nam.
            </p>
            <p>
              <b>Manish : </b>Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Inventore, nam.
            </p>
            <p>
              <b>Mukesh : </b>Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Inventore, nam.
            </p>
          </div>
          <div className="userwrites">
            <input type="text" placeholder="Write anything..." name="" id="" />
            <button>Send</button>
          </div>
        </div>
        
      </div>
      <h3 className="section-title">Latest News on Solar Energy: </h3>
      <div className="newsupdates">
      
        <div className="update">
          <img
            src="https://img.etimg.com/thumb/msid-106848130,width-300,height-225,imgsize-295904,resizemode-75/file-photo-workers-clean-panels-at-a-solar-park-in-modhera.jpg"
            alt=""
          />
          <p>
            {article1.descript}
          </p>

          <a href="">Read more</a>
        </div>

       
        
        
      </div>
      <div className="foot">footer here</div>
    </>
  );
}

export default InvestorDashboard;
