import { useGetAllpostQuery } from '../redux/authentication/authApi';

const Allpost = () => {
  const { data } = useGetAllpostQuery('');
  console.log(data);
  return <div className='flex justify-center items-center min-h-screen'><h1>All post here</h1></div>;
};

export default Allpost;
