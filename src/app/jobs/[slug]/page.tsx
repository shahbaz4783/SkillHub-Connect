import { FC } from 'react';
import JobCard from '../components/JobCard';

interface Params {
	params: {
		title: string;
	};
}

const JobDetails: FC<Params> = ({ params }) => {
	return (
		<main className='w-10/12 m-auto'>
			<h2>{params.title}</h2>
			<section className='grid md:grid-cols-2 gap-8'>
				<JobCard />
			</section>
		</main>
	);
};

export default JobDetails;
