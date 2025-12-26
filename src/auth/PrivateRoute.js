import React from 'react';
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({isAuthed, isLoading, children}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!isAuthed) {
        return <Navigate to = '/signin' replace />;
    }
    return children ;
};