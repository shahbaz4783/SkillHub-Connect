import { getJobDetailsData } from '@/data/all-listings';

interface ParamsProps {
	params: {
		jobId: string;
	};
}
const JobDetailPage = async ({ params }: ParamsProps) => {
	const jobDetails = await getJobDetailsData(params.jobId);
	return (
		<main>
			<div>
				<p>{jobDetails?.title}</p>
			</div>
		</main>
	);
};

export default JobDetailPage;
