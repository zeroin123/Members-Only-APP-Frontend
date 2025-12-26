import React from 'react';

export const MessagesListItem = ({ message }) => (
     <div className='list-item'>
        <div className='list-item-data'>
            <h3>{message.userName}</h3>
            <p>By: {message.text}</p>
        </div>
    </div>

)
   