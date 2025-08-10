import clientPromise from '@/lib/mongodb';

export default async function DataFetchingDemo() {
  const client = await clientPromise;
  const db = client.db("rsc_demo");
  const users = await db.collection("users").find().toArray();

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
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
