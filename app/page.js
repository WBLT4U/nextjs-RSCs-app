import fs from 'node:fs/promises';

import { Suspense } from 'react';

import ServerActionsDemo from '@/components/ServerActionsDemo';
import UsePromiseDemo from '@/components/UsePromisesDemo';
import ErrorBoundary from '@/components/ErrorBoundary';

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) =>
  setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    resolve(users);
  }, 2000)
);

  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
      <ServerActionsDemo />
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
