import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import {
	getInstitution,
	setInstitutionIsError,
} from '@/redux/institution/institution.slice';

const useInstitution = () => {
	const { institution, message, status } = useAppSelector(
		(state) => state.institution
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getInstitution());
		} else dispatch(setInstitutionIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		institution,
		status,
		message,
	};
};

export default useInstitution;
