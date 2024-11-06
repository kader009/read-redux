import { FormEvent, useState } from 'react';

const AddPost = () => {
  const [addPost, { isLoading, isSuccess, error }] = useAddPostMutation();
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addPost({ title }); // Automatically updates Redux store with the new post
    } catch (err) {
      console.error('Error adding post', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Post'}
      </button>
      {isSuccess && <p>Post added successfully!</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddPost;
