import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProtectedResource } from "../data/useProtectedResource";
import { useUser } from "../auth/useUser";
import { MessagesList } from '../messages/index.js';
import { RequestsList } from '../requests/index.js';
import { postWithCredentials } from "../data/postWithCredentials.js";

export const GroupPage = () => {
    const [messageValue, setMessageValue] = useState("");
    const { groupId } = useParams();
    const { user } = useUser();

    const [group, setGroup] = useProtectedResource(
        `/groups/${groupId}`,
        { owner: {}, messages: [], requests: [] }
    );

    if (!group || !group.name) {
        return <p>Loading...</p>;
    }


    const acceptRequest = async (requestId) => {
        try {
            const response = await postWithCredentials(`/groups/${groupId}/requests/${requestId}/accept`);
            const updatedRequests = await response.json();
            setGroup({
                ...group,
                requests: updatedRequests
        })
        }catch (error) {
            console.error("Error accepting request:", error);
        }
    }
    const rejectRequest = async (requestId) => {
        try {
            const response = await postWithCredentials(`/groups/${groupId}/requests/${requestId}/reject`);
            const updatedRequests = await response.json();
            setGroup({
                ...group,
                requests: updatedRequests
        })
        }catch (error) {
            console.error("Error rejecting request:", error);
        }
    }
    const postMessage = async () => {
        const response = await postWithCredentials(`/groups/${groupId}/messages`, { text: messageValue });
        const {updatedMessages} = await response.json();
        setGroup({
            ...group,
            messages: updatedMessages
        });
        setMessageValue("");
    }
  return (
    <>
    <div className="centered-container">
        <h1>{group.name}</h1>
        <p>Owned by: {group.owner?.fullName}</p>
        <MessagesList messages = {group.messages}/>
        <div className="centered-container space-before space-after">
            <input
                type="text"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                placeholder="Type your message here"
            />
            <button onClick = {postMessage}>Send Message</button>
        </div>
        <div>
            {user.uid === group.owner.uid && (
                <RequestsList 
                    requests={group.requests} 
                    onAccept={acceptRequest} 
                    onReject={rejectRequest} 
                />
            )}
        </div>
    </div>
    </>
  );
};
