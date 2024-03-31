import React from "react";
import "./Dashboard.css";

const Dashboard = (props) => {
  const logoutHandler = () => {
    props.state(false);
  };
  return (
    <div className="dashboard__container">
      <div className="dasboard__title">
        <h1>WELCOME</h1>
      </div>
      <div className="dashboard__button">
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
