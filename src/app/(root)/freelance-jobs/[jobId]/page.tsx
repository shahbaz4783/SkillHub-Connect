import ListItem from '@/components/ui/ListItem';
import { Button } from '@/components/ui/button';
import { getJobDetailsData } from '@/data/all-listings';
import { Banknote, BrainCircuit, CircleDollarSign, Heart } from 'lucide-react';

interface ParamsProps {
	params: {
		jobId: string;
	};
}
const JobDetailPage = async ({ params }: ParamsProps) => {
	const jobDetails = await getJobDetailsData(params.jobId);
	return (
		<div className='flex flex-col md:flex-row min-h-svh'>
			<main className='md:w-3/4'>
				<section className='border-b-[1px] py-8 space-y-3'>
					<p className='font-semibold text-xl'>{jobDetails?.title}</p>
					<p className='text-sm'>{jobDetails?.createdAt.toDateString()}</p>
				</section>

				<section className='border-b-[1px] py-8 space-y-3'>
					<p className='text-sm'>{jobDetails?.description}</p>
				</section>

				<section className='border-b-[1px] flex gap-16 py-12'>
					<menu className='flex gap-4 p-2'>
						<div className='pt-1'>
							<CircleDollarSign />
						</div>
						<ul>
							<li className='font-semibold text-stone-600'>
								${jobDetails?.price}
							</li>
							<li className='text-sm text-slate-500'>Budget</li>
						</ul>
					</menu>
					<menu className='flex gap-4 p-2'>
						<div className='pt-1'>
							<BrainCircuit />
						</div>
						<ul>
							<li className='font-semibold text-stone-600'>
								{jobDetails?.experience}
							</li>
							<li className='text-sm text-slate-500'>
								I am looking for a mix of experience and value
							</li>
						</ul>
					</menu>
				</section>

				<section className='border-b-[1px] py-8 space-y-6'>
					<h2 className='text-lg font-semibold'>Skills and Expertise</h2>
					<div className='space-x-3 md:w-1/2'>
						{jobDetails?.skills.split(',').map((item, index) => (
							<span
								key={index}
								className='bg-slate-200 py-1 px-2 md:px-4 rounded-3xl'
							>
								{item.trim()}
							</span>
						))}
					</div>
				</section>

				<section className='border-b-[1px] py-8 space-y-3'>
					<h2 className='text-lg font-semibold'>Activity on this job </h2>
					<menu>
						<div className='space-x-3 text-sm'>
							<span>Proposals:</span>
							<span>Less than 5</span>
						</div>
						<div className='space-x-3 text-sm'>
							<span>Proposals:</span>
							<span>Less than 5</span>
						</div>
					</menu>
				</section>
			</main>
			<aside className='md:w-1/4 border-l-[1px] px-6 py-8'>
				<section className='flex flex-col justify-between gap-3'>
					<Button>Apply Now</Button>
					<Button variant={'outline'} className='space-x-2'>
						<Heart /> <span>Save Job</span>
					</Button>
				</section>
			</aside>
		</div>
	);
};

export default JobDetailPage;
