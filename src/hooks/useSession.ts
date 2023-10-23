import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import { getSessions, setSessionIsError } from '@/redux/sessions/session.slice';

const useStudents = () => {
	const { sessions, selectedSession, message, status } = useAppSelector(
		(state) => state.session
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getSessions());
		} else dispatch(setSessionIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		sessions,
		selectedSession,
		status,
		message,
	};
};

export default useStudents;
