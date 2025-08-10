'use client';

import { useState, use } from 'react';

export default function UsePromiseDemo({ usersPromise }) {
  const users = use(usersPromise);
  const [count, setCount] = useState(0);

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <span>{count}</span>
      </p>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}
