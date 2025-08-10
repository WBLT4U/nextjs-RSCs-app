'use client';

import { useRouter } from 'next/navigation';
import { saveUserAction } from '@/actions/users';

export default function ServerActionsDemo() {
  const router = useRouter();

  async function handleSubmit(formData) {
    await saveUserAction(formData); // Save to file
    router.refresh(); // Re-fetch server component data (users list)
  }

  return (
    <div className="rsc">
      <h2>Server Actions</h2>
      <p>
        A "Form Action" converted to a "Server Action" via{' '}
        <strong>"use server"</strong>.
      </p>
      <form action={handleSubmit}>
        <p>
          <label htmlFor="name">User name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p>
          <button type="submit">Save User</button>
        </p>
      </form>
    </div>
  );
}
