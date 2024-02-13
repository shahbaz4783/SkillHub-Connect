'use client';

const ErrorBoundary = () => {
	return (
		<div className='text-center h-svh flex flex-col items-center justify-center'>
			<h1 className='text-4xl font-serif'>An Error occured</h1>
			<h1 className='text-xl'>Sorry for the inconvience. Please Try again later</h1>
		</div>
	);
};

export default ErrorBoundary;
