import clientPromise from '@/lib/mongodb';
import { Suspense } from 'react';

import ServerActionsDemo from '@/components/ServerActionsDemo';
import UsePromiseDemo from '@/components/UsePromisesDemo';
import ErrorBoundary from '@/components/ErrorBoundary';

export default async function Home() {
  const fetchUsersPromise = new Promise(async (resolve) => {
    const client = await clientPromise;
    const db = client.db("rsc_demo");
    const users = await db.collection("users").find().toArray();
    resolve(JSON.parse(JSON.stringify(users)));
  });

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
