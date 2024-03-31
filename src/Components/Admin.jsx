import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const Admin = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      window.history.forward();
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
  }, []);
  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <div className="admin__container">
      <table>
        <tr>
          <th>Usernames</th>
        </tr>

        {data.map(({ username, email }) => (
          <div className="user__table">
            <tr>
              <td>
                <p>{username}</p>
              </td>
            </tr>
          </div>
        ))}
      </table>
      <div className="admin__button">
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Admin;
