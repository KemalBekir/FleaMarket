import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import * as UserService from "../../services/userService";
import * as CatalogService from "../../services/catalogService";
import "./Profile.css";
import Spinner from "../Common/Spinner/Spinner";
import { HomeCard } from "../HomeCard/HomeCard";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    UserService.getProfile(user.accessToken).then((result) => {
      setProfile(result);
      setLoading(false);
      console.log(result);

    });
  }, [user.accessToken]);

  useEffect(() => {
    CatalogService.myAds(user.accessToken).then((result) => {
      setItems(result);
      setLoading(false);
    });
  }, [user.accessToken]);

  return (
    <section className="profile-section">
        {items.length > 0 ? (
          <>
            <h2 className="profile-title">Welcome, <span className="profile-user">{profile.username}</span>. Here are your listings</h2>
          </>
        ) : (
          <>
          <h2 className="profile-title">Welcome, <span className="profile-user">{profile.username}</span>. You don't have any listings yet</h2>
          </>
        )}
      <div className="profile-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="profile-list-container">
            {items.map((x) => (
              <HomeCard key={x._id} item={x} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
