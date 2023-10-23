'use client';
import { useEffect, useMemo } from 'react';
import { loadUserData, logoutUser } from '@/redux/auth/auth.slice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useAuth = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.auth);

	const isLogin = useMemo(() => {
		return !!user.user;
	}, [user.user]);

	const logout = () => {
		dispatch(logoutUser());
	};

	useEffect(() => {
		const session = JSON.parse(localStorage.getItem('session-user')!);
		if (!user.user && session) dispatch(loadUserData(session));
	}, [dispatch, user.user]);

	return { user, isLogin, logout };
};

export default useAuth;
