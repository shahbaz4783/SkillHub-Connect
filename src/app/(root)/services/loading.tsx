import Banner from '@/components/loaders/Banner';
import Heading from '@/components/loaders/Heading';
import ServiceCard from '@/components/loaders/ServiceCard';
import React from 'react';

const loading = () => {
	return (
		<div className='w-10/12 mt-4 m-auto'>
			<Banner />
			<Heading />
			<div className='flex flex-col md:flex-row gap-4'>
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</div>
		</div>
	);
};

export default loading;
