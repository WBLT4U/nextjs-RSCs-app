export const dynamic = "force-dynamic";

import clientPromise from '@/lib/mongodb';
import { Suspense } from 'react';

import ServerActionsDemo from '@/components/ServerActionsDemo';
import UsePromiseDemo from '@/components/UsePromisesDemo';
import ErrorBoundary from '@/components/ErrorBoundary';

export default async function Home() {
  const fetchUsersPromise = (async () => {
    const client = await clientPromise;
    const db = client.db("rsc_demo");
    const users = await db.collection("users").find().sort({ createdAt: -1 }).toArray();

    return users.map(user => ({
      ...user,
      _id: user._id.toString()
    }));
  })();

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
