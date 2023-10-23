import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import { getStaffs, setStaffIsError } from '@/redux/staff/staff.slice';

const useStaff = () => {
	const { staffs, selectedStaff, message, status } = useAppSelector(
		(state) => state.staff
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getStaffs());
		} else dispatch(setStaffIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		staffs,
		selectedStaff,
		status,
		message,
	};
};

export default useStaff;
