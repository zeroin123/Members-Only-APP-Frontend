import React from 'react';
import {Navigate, Route} from 'react-router-dom';

export const PrivateRoute = ({isAuthed, isLoading, ...rest}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!isAuthed) {
        return <Navigate to = '/signin' replace />;
    }
    return <Route {...rest} />;
};