import { FC } from 'react';
import JobCard from '../../../../components/cards/JobCard';
import SectionTop from '@/components/ui/SectionTop';
import DescHeading from '@/components/ui/DescHeading';

interface Params {
	params: {
		title: string;
	};
}

const JobDetails: FC<Params> = ({ params }) => {
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
