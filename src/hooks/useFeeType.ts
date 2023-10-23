import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import useAuth from './useAuth';
import { getFeeTypes, setFeeTypeIsError } from '@/redux/feeType/feeType.slice';

const useFeeType = () => {
	const { feeTypes, selectedFeeType, message, status } = useAppSelector(
		(state) => state.feeType
	);
	const dispatch = useAppDispatch();
	const { isLogin } = useAuth();

	useEffect(() => {
		if (isLogin) {
			dispatch(getFeeTypes());
		} else dispatch(setFeeTypeIsError(true));
	}, [dispatch, isLogin, message]);
	return {
		feeTypes,
		selectedFeeType,
		status,
		message,
	};
};

export default useFeeType;
