import { useLoaderData } from 'react-router-dom';

const JobPage = () => {
  const job = useLoaderData();

  return <div>{job.title}</div>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
