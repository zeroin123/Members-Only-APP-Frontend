import React from 'react';
import {RequestsListItem} from './RequestsListItem.js';

export const RequestsList = ({requests, onAccept, onReject }) => {
    return (
    <>
    <h2 className='section-heading'>Requests</h2>
    {
        requests.length>0
        ?requests.map((request) => (
            <RequestsListItem key={request._id} request={request} onAccept={onAccept} onReject={onReject} />
        ))
        :<p>No Pending Requests.</p>
    }
    </>);
}