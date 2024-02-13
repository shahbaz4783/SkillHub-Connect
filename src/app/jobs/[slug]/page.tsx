import { FC } from 'react';

interface Params {
	params: {
		title: string;
	};
}

const JobDetails: FC<Params> = ({ params }) => {
		return (
			<main>
				<h2>{params.title}</h2>
				<div>Hello</div>
			</main>
		);
};

export default JobDetails;
