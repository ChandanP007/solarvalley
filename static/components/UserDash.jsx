import "../stylesheets/dashboard.css";

//icons


function UserDashboard(props) {
  return (
    <>
      <div className="userInfo">
        <h4>Welcome back! {props.useremail}</h4>
        <div className="usericon">
          <img src={props.userimg} alt="" />
          <h5 className="usertag">{props.usertype}</h5>
        </div>

      </div>
     
    </>
  );
}

export default UserDashboard;
