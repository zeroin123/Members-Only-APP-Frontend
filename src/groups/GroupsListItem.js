import React from 'react';
import {postWithCredentials} from '../data/postWithCredentials.js';


export const GroupsListItem = ({ group }) => {
    const requestToJoin = async () => {
        try{
            await postWithCredentials(`/groups/${group.groupId}/request`);
            alert("Request to join sent!");
        }catch (error){
            console.error("Error requesting to join group:", error);
        }
    }
    return( 
        <div className= "list-item">
            <div className = "list-item-data">
                <h3>{group.name}</h3>
                <p>Owned by: {group.ownerName}</p>
                <p>{group.members.length} members</p>
            </div>
            <button onClick = {requestToJoin}>Ask to Join</button>
        </div>
        );
};
    