import { Spin } from 'antd';
import React from 'react';

const SpinLoader = () => {
	return (
		<Spin tip='Loading'>
			<div className='w-56 h-56 flex justify-center items-center' />
		</Spin>
	);
};

export default SpinLoader;
