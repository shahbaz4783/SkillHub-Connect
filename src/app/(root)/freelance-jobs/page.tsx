import JobPostCard from '@/components/cards/job-post-card';
import JobCard from '@/components/cards/JobCard';
import JobPostFilter from '@/components/filter/JobPostFilter';
import DescHeading from '@/components/ui/DescHeading';
import { getJobPosts } from '@/data/all-listings';

const JobDetails = () => {
  return (
    <main className="my-12">
      <DescHeading
        heading="Find the best jobs"
        subhead="It takes just one job to develop a successful relationship that can propel your career forward."
      />
      <section className="grid gap-8 md:grid-cols-4">
        <div>
          <JobPostFilter />
        </div>
        <div className="col-span-3">
          <JobPostCard fetchData={() => getJobPosts('all')} />
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
