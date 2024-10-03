import React from 'react';

export const User = ({id, email, first_name, last_name, avatar, onClickInvite, isInvited}) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>{first_name} {last_name}</h3>
        <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
          {email}
        </p>
      </div>
    </div>
    <img onClick={()=>onClickInvite(id)} className="action" src={`/assets/${isInvited?'minus':'plus'}.svg`} alt="Action" />
  </li>
);
// export default User;