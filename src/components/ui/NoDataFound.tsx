import React from 'react';

const NoDataFound = ({ message }: { message: string }) => {
	return <p className="py-4 text-slate-400">{message}</p>;
};

export default NoDataFound;
