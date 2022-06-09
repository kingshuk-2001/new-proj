import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { LoginProvider } from '../context/LoginContext';
import NotAllowed from '../pages/notallowed';
import useLocalStorage from './useAuth';

interface GuardedRouteProps {
    children: React.ReactChild,
    allowedRoles : any
}

// check if user info is present in local storage to check login -> 
// check if user's role is present in allowed roles -> if yes display the children component

const GuardedRoute: React.FC<GuardedRouteProps> =(props: any) => {
     
    const [userInfo, setUserInfo] = useLocalStorage("user-info", "");
    const { children } = props;
    if (!userInfo) {
        return <Navigate key="loginPath" to={"/login"} />;
    }
    
    if(props.allowedRoles.includes(userInfo.role))
      return children
    else
      return <NotAllowed />
    
};

export default GuardedRoute; 