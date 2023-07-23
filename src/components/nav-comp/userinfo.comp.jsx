import React from 'react';

function UserInfo({user}) {
  return (
    <div>
      <img src={user.photoURL} alt={user.displayName} className='photoUser' />
    </div>
  );
}

export default UserInfo;
