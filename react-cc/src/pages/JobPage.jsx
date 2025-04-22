import { useLoaderData } from 'react-router-dom';

const JobPage = () => {
  const job = useLoaderData();

  return <div>{job.title}</div>;
};

export default JobPage;
