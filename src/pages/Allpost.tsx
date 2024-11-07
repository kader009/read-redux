import { useGetAllpostQuery } from '../redux/authentication/authApi';

interface Posts {
  _id: string;
  text: string;
}

const Allpost = () => {
  const { data, isLoading } = useGetAllpostQuery('');

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>All post here</h1>

      <div className="mt-6">
        {data.map((post: Posts) => (
          <div key={post._id}>
            <h1>{post.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allpost;
