import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import { getClasses, setClasseIsError } from '@/redux/classes/class.slice';

const useClasses = () => {
	const { classes, selectedClasse, message, status } = useAppSelector(
		(state) => state.class
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getClasses());
		} else dispatch(setClasseIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		classes,
		selectedClasse,
		status,
		message,
	};
};

export default useClasses;
