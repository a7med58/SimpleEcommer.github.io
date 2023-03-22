import React, { useEffect, useState } from "react";
import "./Profile.css";
function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://route-movies-api.vercel.app/singin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUserInfo(data);
          });
        } else {
          alert("Failed to fetch user information");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="profile-box">
              <h4>User Information</h4>
              <p>
                <strong>Email:</strong> {userInfo.email}
              </p>
              <p>
                <strong>Name:</strong> {userInfo.name}
              </p>
              <p>
                <strong>Address:</strong> {userInfo.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
