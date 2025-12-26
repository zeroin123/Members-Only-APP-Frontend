import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignInPage, PrivateRoute } from './auth/index.js';
import { GroupsListPage, CreateGroupPage, GroupPage } from './groups';
import { NavBar } from './navigation';
const routes = [{
    path:  '/signin',
    Component: SignInPage
}, {
    path: '/',
    Component: GroupsListPage,
    private: true,
    exact: true,
}, {
    path: '/groups/create-group',
    Component: CreateGroupPage,
    private: true,
}, {
    path: '/groups/:groupId',
    Component: GroupPage,
    private: true,
}]

export const RouteMap = ({user, isLoading}) => (
    <Router>
        <NavBar user={user} />
        <Routes>
            {routes.map(({path, Component, private: isPrivate}) => (
                isPrivate ? (
                    <Route key={path} path={path} element={<PrivateRoute isAuthed={!!user} isLoading={isLoading}><Component /></PrivateRoute>} />
                ) : (
                    <Route key={path} path={path} element={<Component />} />
                )
            ))}
        </Routes>
    </Router>
)