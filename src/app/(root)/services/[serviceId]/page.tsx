import { getServiceDetailsData } from '@/data/all-listings';

interface ParamsProps {
	params: {
		serviceId: string;
	};
}

const ServiceDetails = async ({ params }: ParamsProps) => {
	const serviceDetails = await getServiceDetailsData(params.serviceId);

	return (
		<>
			<div>
				<p>{serviceDetails?.title}</p>
			</div>
		</>
	);
};

export default ServiceDetails;
