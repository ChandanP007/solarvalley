import React, { useState, useEffect } from "react";
import sources from "../../data/sources.json";
import { auth, provider } from "../../data/firebase";
import { signInWithPopup } from "firebase/auth";
import InvestorDashboard from "./InvestorDash";
import Operate from "./operate";
import Newsletter from "./Newsletter";
import Navigation from "./navigation";
import UserDashboard from "./UserDash";

function Login() {
  //Image sources
  const defaultavatar = sources["img-sources"].avatars[0].url;
  const investoravatar = sources["img-sources"].avatars[1].url;

  //States
  const [avatarImg, setAvatarImg] = useState(defaultavatar);
  const [selectedLoginType, setSelectedLoginType] = useState("none");
  const [IdPlaceholder, setIdPlaceholder] = useState("Enter your Investor Id");
  const [userId, setUserId] = useState("");
  const [userPass, setUserPass] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setpopupMsg] = useState("");
  const [isloggedIn, setisLoggedIn] = useState(false);

  const handleLoginTypeChange = (e) => {
    const newValue = e.target.value;
    setSelectedLoginType(newValue);

    if (newValue == "user") {
      setIdPlaceholder("Enter your User ID");
      setAvatarImg(defaultavatar);
    } else if (newValue == "none") {
      setIdPlaceholder("");
      setAvatarImg(defaultavatar);
    } else {
      setIdPlaceholder("Enter your Investor ID");
      setAvatarImg(investoravatar);
    }
  };

  //Google SignIn
  const [value, setValue] = useState("");
  const [userImg, setUserImg] = useState("");
  const [userLoc, setUserLoc] = useState("");

  const handleClick = () => {
    if (selectedLoginType == "none") {
      alert("Please select a login type");
    } else {
      signInWithPopup(auth, provider).then((data) => {
        console.log(data);
        setValue(data.user.displayName);
        setUserImg(data.user.photoURL);
        // localStorage.setItem("email",data.user.email)
      });
    }
  };

  // useEffect(()=>{
  //     setValue(localStorage.getItem('email'))
  // })

  // User location 
  var geocoder;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(successcall,errorcall);
  }

  function successcall(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    // const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cbf5efaf9045d9f3df6dd6787192b796`;)
    // console.log(lat,lng);

    fetchWeather(lat,lng);
    
    async function fetchWeather(lat,lng){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cbf5efaf9045d9f3df6dd6787192b796`);
      const data = await response.json();
      const userlocation = data.name;
      setUserLoc(userlocation);
    }
    
  } 
  function errorcall(){
    console.log("Geocoder failed!");
  }



  
  

  let navmsg = ` ${value} | 📍Location : ${userLoc}`;
  return (
    <>
      {value ? (
        <>
          <Navigation msg={navmsg} />
          {selectedLoginType == "investor" ? (
            <InvestorDashboard
              useremail={value}
              userimg={userImg}
              usertype={selectedLoginType}
            />
          ) : (
            <UserDashboard
              useremail={value}
              userimg={userImg}
              usertype={selectedLoginType}
            />
          )}
          {/* <InvestorDashboard useremail={value} userimg={userImg} usertype={selectedLoginType}/> */}
        </>
      ) : (
        <>
          <Navigation msg="Please Login into your account or SignUp" />
          <div className="Login-Section">
            {/* Login Section  */}
            <div className="login-container">
              <div className="window-switch">
                <img className="login-type-avatar" src={avatarImg} alt="" />
                <label htmlFor="choose-login-type">Login As</label>
                <select
                  id="choose-login-type"
                  value={selectedLoginType}
                  onChange={handleLoginTypeChange}
                >
                  <option value="none">Choose login type</option>
                  <option value="investor">Investor</option>
                  <option value="user">User</option>
                </select>
              </div>

              <div className="get-user-credentials">
                <form action="" id="loginForm">
                  <input
                    type="text"
                    name="f1"
                    placeholder={IdPlaceholder}
                    onChange={(e) => {
                      setUserId(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    name="f2"
                    placeholder="Password"
                    onChange={(e) => {
                      setUserPass(e.target.value);
                    }}
                  />
                  <button className="login-type-submit">Sign In</button>
                </form>
              </div>

              <button className="googleSignIn" onClick={handleClick}>
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                />
                Sign In With Google
              </button>

              {showPopup && (
                <div className="popup">
                  <p>{popupMsg}</p>
                </div>
              )}
            </div>

            {/* Thumbnail Section  */}
            <div className="sidethumbnail">
              <img
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <Operate />
          <Newsletter />
        </>
      )}
    </>
  );
}

export default Login;
