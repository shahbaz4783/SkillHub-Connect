import { auth } from '@/auth';
import React from 'react';

const LoginHomePage = async () => {
	const session = await auth();
	return (
		<div className='space-y-8 m-8'>
			<h2 className='text-2xl'>Hey there, {session?.user?.name}</h2>
			<div>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione
					magni praesentium distinctio quia consequatur cumque sint hic maiores
					accusamus, natus quidem vel, incidunt quod, officia adipisci quo
					quisquam vero!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste
					delectus voluptatum, accusamus sapiente, sint ducimus porro debitis
					aliquid accusantium ex. Quia pariatur rerum, consectetur perferendis
					tempora cumque facere quam!
				</li>
			</div>
			<div>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione
					magni praesentium distinctio quia consequatur cumque sint hic maiores
					accusamus, natus quidem vel, incidunt quod, officia adipisci quo
					quisquam vero!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste
					delectus voluptatum, accusamus sapiente, sint ducimus porro debitis
					aliquid accusantium ex. Quia pariatur rerum, consectetur perferendis
					tempora cumque facere quam!
				</li>
			</div>
			<div>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione
					magni praesentium distinctio quia consequatur cumque sint hic maiores
					accusamus, natus quidem vel, incidunt quod, officia adipisci quo
					quisquam vero!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste
					delectus voluptatum, accusamus sapiente, sint ducimus porro debitis
					aliquid accusantium ex. Quia pariatur rerum, consectetur perferendis
					tempora cumque facere quam!
				</li>
			</div>
			<div>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione
					magni praesentium distinctio quia consequatur cumque sint hic maiores
					accusamus, natus quidem vel, incidunt quod, officia adipisci quo
					quisquam vero!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste
					delectus voluptatum, accusamus sapiente, sint ducimus porro debitis
					aliquid accusantium ex. Quia pariatur rerum, consectetur perferendis
					tempora cumque facere quam!
				</li>
			</div>
		</div>
	);
};

export default LoginHomePage;
