'use client';
import { message as Toast } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setAuthIsError, setAuthIsSuccess } from '@/redux/auth/auth.slice';

const ToastMessageManager = () => {
	const [toast, contextHolder] = Toast.useMessage({ maxCount: 1 });
	const dispach = useAppDispatch();

	/**
	 * Auth toast messages
	 */
	const { status: authStatus, message: authMessage } = useAppSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (authStatus.isSuccess) {
			authMessage && toast.success(authMessage);
			dispach(setAuthIsSuccess(false));
		}
		if (authStatus.isError) {
			authMessage && toast.error(authMessage);
			dispach(setAuthIsError(false));
		}
	}, [authStatus]);

	return (
		<>
			{contextHolder}
			<div></div>
		</>
	);
};

export default ToastMessageManager;
