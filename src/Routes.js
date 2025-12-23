import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignInPage } from './auth/SignInpage';
import { GroupsListPage, CreateGroupPage, GroupPage } from './groups';
import { NavBar } from './navigation';
const routes = [{
    path:  '/signin',
    Component: SignInPage
}, {
    path: '/',
    Component: GroupsListPage,
    exact: true,
}, {
    path: '/groups/create-group',
    Component: CreateGroupPage
}, {
    path: '/groups/:id',
    Component: GroupPage
}]

export const RouteMap = () => (
    <Router>
        <NavBar />
        <Routes>
            {routes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    </Router>
)