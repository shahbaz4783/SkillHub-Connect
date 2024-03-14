import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import YourPostedJobs from '@/components/cards/admin/YourPostedJobs';
import YourPostedServices from '@/components/cards/admin/YourPostedServices';

const AllListings = () => {
	return (
		<Tabs defaultValue='service' className=''>
			<TabsList className='py-8 px-4 mb-4'>
				<TabsTrigger className='p-3' value='service'>
					Your Posted Services
				</TabsTrigger>
				<TabsTrigger className='p-3' value='job'>
					Your Posted Jobs
				</TabsTrigger>
			</TabsList>
			<TabsContent value='service'>
				<YourPostedServices />
			</TabsContent>
			<TabsContent value='job'>
				<YourPostedJobs />
			</TabsContent>
		</Tabs>
	);
};

export default AllListings;
