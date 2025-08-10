'use server';

import clientPromise from '@/lib/mongodb';

export async function saveUserAction(formData) {
  const client = await clientPromise;
  const db = client.db("rsc_demo");

  const newUser = {
    name: formData.get('name'),
    title: formData.get('title'),
    createdAt: new Date()
  };

  await db.collection("users").insertOne(newUser);
}
