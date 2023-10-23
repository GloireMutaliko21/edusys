import { HTMLInputProps } from '@/types/types';
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren, useId } from 'react';

const Input: FunctionComponent<PropsWithChildren<HTMLInputProps>> = ({
	name,
	label,
	type = 'text',
	value,
	onChange,
	placeholder,
	required,
	error,
	full = true,
	errorMessage,
	...props
}) => {
	const id = useId();
	return (
		<div className={`${!full ? 'flex-grow basis-1/2' : ''}`}>
			<label htmlFor={id} className='block text-sm mb-2 dark:text-white'>
				{label}
			</label>
			<div className='relative'>
				<input
					type={type}
					id={id}
					name={name}
					className='py-3 border outline-none px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
					required={!!required}
					placeholder={placeholder}
					value={value as string}
					onChange={onChange}
					{...props}
				/>
				{error && (
					<div
						className={`${
							error ? 'flex' : 'hidden'
						} absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
					>
						<svg
							className='h-5 w-5 text-red-500'
							width={16}
							height={16}
							fill='currentColor'
							viewBox='0 0 16 16'
							aria-hidden='true'
						>
							<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
						</svg>
					</div>
				)}
			</div>
			{error && (
				<p className='hidden text-xs text-red-600 mt-2' id='email-error'>
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export const PasswordInputLogin: FunctionComponent<
	PropsWithChildren<HTMLInputProps>
> = ({
	name,
	label,
	type = 'password',
	value,
	onChange,
	placeholder,
	required,
	error,
	inputLabel = 'Mot de passe oublié ?',
	linkInput = '/forgot-password',
	full = true,
	errorMessage,
	...props
}) => {
	const id = useId();
	return (
		<div className={`${!full ? 'flex-grow basis-1/2' : ''}`}>
			<div className='flex justify-between items-center'>
				<label htmlFor={id} className='block text-sm mb-2 dark:text-white'>
					{label}
				</label>
				<Link
					className='text-sm text-blue-600 decoration-2 hover:underline font-medium'
					href={linkInput}
				>
					{inputLabel}
				</Link>
			</div>

			<div className='relative'>
				<input
					type={type}
					id={id}
					name={name}
					className='py-3 border outline-none px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
					required={!!required}
					placeholder={placeholder}
					onChange={onChange}
					value={value as string}
					{...props}
				/>
				{error && (
					<div
						className={`${
							error ? 'flex' : 'hidden'
						} absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
					>
						<svg
							className='h-5 w-5 text-red-500'
							width={16}
							height={16}
							fill='currentColor'
							viewBox='0 0 16 16'
							aria-hidden='true'
						>
							<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
						</svg>
					</div>
				)}
			</div>
			{error && (
				<p className='hidden text-xs text-red-600 mt-2' id='email-error'>
					{errorMessage}
				</p>
			)}
		</div>
	);
};
export default Input;
