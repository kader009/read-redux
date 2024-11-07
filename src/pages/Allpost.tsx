import { useGetAllpostQuery } from '../redux/authentication/authApi';

const Allpost = () => {
  const { data, isLoading } = useGetAllpostQuery('');
  console.log(data);

  if(isLoading){
    return <div className='flex justify-center items-center min-h-screen text-red-600'>Loading...</div>
  }
  return <div className='flex justify-center items-center min-h-screen'>
    <h1>All post here</h1>
    {data.length}
  </div>;
};

export default Allpost;
