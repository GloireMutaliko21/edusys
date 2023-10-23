'use client';
import { useEffect, useMemo } from 'react';
import { loadUserData, logoutUser } from '@/redux/auth/auth.slice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useAuth = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth);

	const isLogin = useMemo(() => {
		return !!auth.user;
	}, [auth.user]);

	const logout = () => {
		dispatch(logoutUser());
	};

	useEffect(() => {
		const session = JSON.parse(localStorage.getItem('user-session')!);
		if (!auth.user && session) dispatch(loadUserData(session));
	}, [dispatch, auth.user]);

	return { auth, isLogin, logout };
};

export default useAuth;
