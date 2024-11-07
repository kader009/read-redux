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
    <div>
      <h1 className="text-center capitalize">All post here</h1>
      <div className="my-8">
        <div className="space-y-3 flex gap-3 justify-center items-center">
          {data.map((post: Posts) => (
            <div key={post._id} className="flex justify-center">
              <h1 className="bg-black p-2 text-white rounded">{post.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allpost;
