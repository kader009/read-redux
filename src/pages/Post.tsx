import { useAllPostQuery } from '../redux/api/PostApi';

interface Posts {
  body: string;
  id: number;
  title: string;
  userId: string;
}

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
    <div className="text-center">
      <h1>All user post here</h1>
      {data.map((post: Posts) => (
        <div key={post.id}>
          <span>{post.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ApiPost;
