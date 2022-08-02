import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'
import * as UserService from '../../services/userService';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    UserService.getProfile(user.accessToken).then((result) => {
      setProfile(result);
      setLoading(false);
      console.log(result);
    });
  },[user.accessToken])

  return (
    <div>
      <h1>Profile: {profile.username}</h1>
      </div>
  )
}

export default Profile