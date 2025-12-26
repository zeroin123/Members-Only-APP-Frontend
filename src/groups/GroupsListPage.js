import React from 'react';
import {Link} from 'react-router-dom';
import {GroupsList} from './GroupsList.js';
import {MyGroupsListItem} from './MyGroupsListItem.js';
import {GroupsListItem} from './GroupsListItem.js';
import {useGroup} from './useGroup.js';
import { useUserGroups } from './useUserGroup.js';

export const GroupsListPage = () => {
    const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroup();
    const { isLoading: isLoadingUserGroups, userGroups: myGroups } = useUserGroups();
    const notMyGroups = allGroups.filter(
        group => !myGroups.some(myGroup => myGroup.groupId === group.groupId)
    );
    const isLoading = isLoadingAllGroups || isLoadingUserGroups;

    return (
        <div className="centered-container">
            <h1 className="section-heading">My Groups</h1>

            <GroupsList
                isLoading={isLoading}
                groups={myGroups}
                ListItemComponent={MyGroupsListItem}
            />

            <h1 className="section-heading">Other Groups</h1>

            <GroupsList
                isLoading={isLoading}
                groups={notMyGroups}
                ListItemComponent={GroupsListItem}
            />
            <div className='space-before space-after'>
                <Link to="/groups/create-group">
                <button >Create a New Group</button>
                </Link>
            </div>
        
        </div>
    );
    };