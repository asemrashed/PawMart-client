import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return (
        <div className="text-2xl text-primary font-semibold flex items-center justify-center gap-5 w-full h-[50vh] bg-white">Loading<span className="loading loading-primary loading-spinner loading-xl"></span></div>
        );
    }
    if(!user){
        return <Navigate state={location.pathname} to="/login" replace />;
    }
    return children;
};

export default PrivetRoute;