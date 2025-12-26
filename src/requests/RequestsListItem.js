import React from 'react';

export const RequestsListItem = ({ request, onAccept,onReject }) => (
    <div className='request-list-item'>
        <h3> {request.userName}</h3>
        <button onClick={() =>onAccept(request.requestId)}><strong>Accept</strong></button>
        <button onClick={() =>onReject(request.requestId)}><strong>Reject</strong></button>
    </div>
);