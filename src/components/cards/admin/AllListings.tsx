import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import YourPostedJobs from '@/components/cards/YourPostedJobs';
import YourPostedServices from '@/components/cards/YourPostedServices';

const AllListings = () => {
	return (
		<Tabs defaultValue='service' className='flex flex-col'>
			<TabsList className='py-6 mb-8'>
				<TabsTrigger value='service'>Your Posted Services</TabsTrigger>
				<TabsTrigger value='job'>Your Posted Jobs</TabsTrigger>
			</TabsList>
			<TabsContent
				value='service'
				className='grid md:grid-cols-3 gap-6 md:gap-16 md:text-center md:w-3/4 m-auto'
			>
				<YourPostedServices />
			</TabsContent>
			<TabsContent
				value='job'
				className='grid md:grid-cols-3 gap-6 md:gap-16 md:text-center mt-0 md:w-3/4 m-auto'
			>
				<YourPostedJobs />
			</TabsContent>
		</Tabs>
	);
};

export default AllListings;
