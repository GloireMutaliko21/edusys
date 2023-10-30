import { useAppDispatch } from '@/hooks/useAppDispatch';
import React from 'react';

const UpdateInstitution = ({
	openDrawer,
	setOpenDrawer,
}: {
	openDrawer: any;
	setOpenDrawer: any;
}) => {
	const onClose = () => {
		setOpenDrawer(false);
	};
	const dispatch = useAppDispatch();
	return <div>UpdateInstitution</div>;
};

export default UpdateInstitution;
