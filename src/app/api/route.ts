import { howServicesWorks } from '@/data/static-lists_data';

export async function GET() {
	return Response.json(howServicesWorks);
}

export async function POST(request: Request) {
	const item = await request.json();
	const newItem = {
		heading: item.heading,
		subheading: item.subheading,
	};
	howServicesWorks.push(newItem);
	return new Response(JSON.stringify(newItem), {
		headers: {
			'Content-Type': 'application/json',
		},
		status: 201,
	});
}
