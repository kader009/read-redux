import { FormEvent, useEffect } from 'react';
import { useAddPostMutation } from '../redux/authentication/endApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { SetText } from '../redux/authentication/postSlice';
import { RootState } from '../redux/store';
import toast from 'react-hot-toast';

const AddPost = () => {
  const [addPost, { isLoading, isSuccess }] = useAddPostMutation();
  const dispatch = useAppDispatch();
  const { text } = useAppSelector((state: RootState) => state.post);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addPost({ text });
      toast.success('Post added successfully!');
    } catch (err) {
      console.error('Error adding post', err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(SetText(''));
    }
  }, [isSuccess, dispatch]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center my-20"
    >
      <input
        className="w-22 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={text}
        onChange={(e) => dispatch(SetText(e.target.value))}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-black p-1 rounded text-white ms-1"
      >
        {isLoading ? 'Adding...' : 'Add Post'}
      </button>
    </form>
  );
};

export default AddPost;
