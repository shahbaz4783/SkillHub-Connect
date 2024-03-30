import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const QuickActions = () => {
	return (
		<div className='bg-slate-100 p-4 rounded-md'>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>Connects</AccordionTrigger>
					<AccordionContent>
						Available: 140
						<div className='space-x-4 mt-2 text-slate-500'>
							<Link className='hover:text-slate-700' href={'/connect'}>
								View Details
							</Link>
							<Link className='hover:text-slate-700' href={'/connect'}>
								Buy More
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value='item-2'>
					<AccordionTrigger>Proposals</AccordionTrigger>
					<AccordionContent>
						<div className='mb-2'>
							<Link
								className='text-slate-500 hover:text-slate-700'
								href={'/proposals'}
							>
								My Proposals
							</Link>
						</div>
						Looking for work? Browse jobs and get started on a proposal.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value='item-3'>
					<AccordionTrigger>Service Catalog</AccordionTrigger>
					<AccordionContent>
						<div className='mb-2'>
							<Link
								className='text-slate-500 hover:text-slate-700'
								href={'/dashboard/listings'}
							>
								My Service Dashboard
							</Link>
						</div>
						Create a Catalog service for clients to purchase instantly
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default QuickActions;
