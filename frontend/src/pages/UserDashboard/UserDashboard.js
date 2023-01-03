import React from 'react'
import './UserDashboard.css'
import { useDispatch, useSelector } from "react-redux";

const UserDashboard = () => {
    const { error, loading, userInfo, isAuth } = useSelector(
        (state) => state.user
      );
  return (
    <div>
        name {userInfo.name}
    </div>
  )
}

export default UserDashboard