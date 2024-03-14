import React from 'react';

const NoDataFound = ({ message }: { message: string }) => {
	return <p className='text-lg text-slate-400'>{message}</p>;
};

export default NoDataFound;
