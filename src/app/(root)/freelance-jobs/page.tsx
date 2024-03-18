import JobCard from '@/components/cards/JobCard';
import DescHeading from '@/components/ui/DescHeading';

const JobDetails = () => {
	return (
		<main className='my-12'>
			<DescHeading
				heading='Find the best jobs'
				subhead='It takes just one job to develop a successful relationship that can propel your career forward.'
			/>
			<section className='grid md:grid-cols-2 gap-8'>
				<JobCard />
			</section>
		</main>
	);
};

export default JobDetails;
