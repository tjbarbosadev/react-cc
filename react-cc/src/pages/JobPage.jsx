import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner /> : <div>{job.title}</div>;
};

export default JobPage;
