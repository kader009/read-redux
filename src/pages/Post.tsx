import { useAllPostQuery } from '../redux/api/PostApi';

const ApiPost = () => {
  const { data, isLoading } = useAllPostQuery('');
  console.log(data);

  if (isLoading) {
    return (
      <div className="text-green-600 flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center lg:flex-row min-h-screen">
      <h1>All user post here</h1>
      {data.map((post) => (
        <div key={post.id}>
          <span>{post.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ApiPost;
