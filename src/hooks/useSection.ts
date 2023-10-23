import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import { getSections, setSectionIsError } from '@/redux/sections/section.slice';

const useSection = () => {
	const { sections, selectedSection, message, status } = useAppSelector(
		(state) => state.section
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getSections());
		} else dispatch(setSectionIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		sections,
		selectedSection,
		status,
		message,
	};
};

export default useSection;
