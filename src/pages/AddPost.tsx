import { FormEvent, useState } from 'react';
import { useAddPostMutation } from '../redux/authentication/authApi';

const AddPost = () => {
  const [addPost, { isLoading, isSuccess }] = useAddPostMutation();
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addPost({ title });
    } catch (err) {
      console.error('Error adding post', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center min-h-screen"
    >
      <input
        className="w-22 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-black p-1 rounded text-white ms-1"
      >
        {isLoading ? 'Adding...' : 'Add Post'}
      </button>
      {isSuccess && <p>Post added successfully!</p>}
    </form>
  );
};

export default AddPost;
