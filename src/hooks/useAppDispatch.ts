import { useDispatch } from 'react-redux';
import { AppDispatcher } from '@/redux/store';

type NewType = AppDispatcher;

export const useAppDispatch: () => NewType = useDispatch;
