import React from 'react';

export const User = () => (
  <li>
    <div>
      <img className="avatar" src="https://reqres.in/img/faces/1-image.jpg" alt="User" />
      <div>
        <h3>Amon Bower</h3>
        <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
          george.bluth@reqres.in
        </p>
      </div>
    </div>
    <img className="action" src="/assets/plus.svg" alt="Action" />
  </li>
);
// export default User;