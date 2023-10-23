import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import { getStudents, setStudentIsError } from '@/redux/student/student.slice';

const useStudents = () => {
	const { students, selectedSudent, message, status } = useAppSelector(
		(state) => state.student
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getStudents());
		} else dispatch(setStudentIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		students,
		selectedSudent,
		status,
		message,
	};
};

export default useStudents;
