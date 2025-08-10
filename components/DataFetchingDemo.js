import clientPromise from '@/lib/mongodb';

export default async function DataFetchingDemo() {
  const client = await clientPromise;
  const db = client.db("rsc_demo");
  const users = await db.collection("users").find().sort({ createdAt: -1 }).toArray();

  const formattedUsers = users.map(user => ({
    ...user,
    _id: user._id.toString()
  }));

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <ul>
        {formattedUsers.map((user) => (
          <li key={user._id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}
