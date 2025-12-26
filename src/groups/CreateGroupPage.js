import React from 'react';
import { postWithCredentials } from '../data/postWithCredentials';
import{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateGroupPage = () => {
    const [groupName, setGroupName] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await postWithCredentials('/groups/create-group', {name: groupName});
            const {newGroupId} = await response.json();
            alert("Group created successfully!");
            navigate(`/groups/${newGroupId}`);
        
        }catch(error){
            console.error("Error creating group:", error);
        }
    }
    return (
        <div className="centered-container">
            <h1>Create a New Group</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Group Name"
                />
                <button type="submit">Create Group</button>
            </form>
        </div>
    );
}