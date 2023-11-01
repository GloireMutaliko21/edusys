'use client';
import { message as Toast } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setAuthIsError, setAuthIsSuccess } from '@/redux/auth/auth.slice';
import {
	setStudentIsError,
	setStudentIsSuccess,
} from '@/redux/student/student.slice';
import {
	setClasseIsError,
	setClasseIsSuccess,
} from '@/redux/classes/class.slice';
import {
	setFeeTypeIsError,
	setFeeTypeIsSuccess,
} from '@/redux/feeType/feeType.slice';
import {
	setSessionIsError,
	setSessionIsSuccess,
} from '@/redux/sessions/session.slice';
import {
	setSectionIsError,
	setSectionIsSuccess,
} from '@/redux/sections/section.slice';
import {
	setInstitutionIsError,
	setInstitutionIsSuccess,
} from '@/redux/institution/institution.slice';

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

	/**
	 * Student toast messages
	 */
	const { status: studentStatus, message: studentMessage } = useAppSelector(
		(state) => state.student
	);

	useEffect(() => {
		if (studentStatus.isSuccess) {
			studentMessage && toast.success(studentMessage);
			dispach(setStudentIsSuccess(false));
		}
		if (studentStatus.isError) {
			studentMessage && toast.error(studentMessage);
			dispach(setStudentIsError(false));
		}
	}, [studentStatus]);

	/**
	 * classes toast messages
	 */
	const { status: classeStatus, message: classeMessage } = useAppSelector(
		(state) => state.class
	);

	useEffect(() => {
		if (classeStatus.isSuccess) {
			classeMessage && toast.success(classeMessage);
			dispach(setClasseIsSuccess(false));
		}
		if (classeStatus.isError) {
			classeMessage && toast.error(classeMessage);
			dispach(setClasseIsError(false));
		}
	}, [classeStatus]);

	/**
	 * feeType toast messages
	 */
	const { status: feeTypeStatus, message: feeTypeMessage } = useAppSelector(
		(state) => state.feeType
	);

	useEffect(() => {
		if (feeTypeStatus.isSuccess) {
			feeTypeMessage && toast.success(feeTypeMessage);
			dispach(setFeeTypeIsSuccess(false));
		}
		if (feeTypeStatus.isError) {
			feeTypeMessage && toast.error(feeTypeMessage);
			dispach(setFeeTypeIsError(false));
		}
	}, [feeTypeStatus]);

	/**
	 * sessions toast messages
	 */
	const { status: sessionStatus, message: sessionMessage } = useAppSelector(
		(state) => state.session
	);

	useEffect(() => {
		if (sessionStatus.isSuccess) {
			sessionMessage && toast.success(sessionMessage);
			dispach(setSessionIsSuccess(false));
		}
		if (sessionStatus.isError) {
			sessionMessage && toast.error(sessionMessage);
			dispach(setSessionIsError(false));
		}
	}, [sessionStatus]);

	/**
	 * sections toast messages
	 */
	const { status: sectionStatus, message: sectionMessage } = useAppSelector(
		(state) => state.section
	);

	useEffect(() => {
		if (sectionStatus.isSuccess) {
			sectionMessage && toast.success(sectionMessage);
			dispach(setSectionIsSuccess(false));
		}
		if (sectionStatus.isError) {
			sectionMessage && toast.error(sectionMessage);
			dispach(setSectionIsError(false));
		}
	}, [sectionStatus]);

	/**
	 * staff toast messages
	 */
	const { status: staffStatus, message: staffMessage } = useAppSelector(
		(state) => state.staff
	);

	useEffect(() => {
		if (staffStatus.isSuccess) {
			staffMessage && toast.success(staffMessage);
			dispach(setSessionIsSuccess(false));
		}
		if (staffStatus.isError) {
			staffMessage && toast.error(staffMessage);
			dispach(setSessionIsError(false));
		}
	}, [staffStatus]);

	/**
	 * institution toast messages
	 */
	const { status: institutionStatus, message: institutionMessage } =
		useAppSelector((state) => state.institution);

	useEffect(() => {
		if (institutionStatus.isSuccess) {
			institutionMessage && toast.success(institutionMessage);
			dispach(setInstitutionIsSuccess(false));
		}
		if (institutionStatus.isError) {
			institutionMessage && toast.error(institutionMessage);
			dispach(setInstitutionIsError(false));
		}
	}, [institutionStatus]);

	return (
		<>
			{contextHolder}
			<div></div>
		</>
	);
};

export default ToastMessageManager;
