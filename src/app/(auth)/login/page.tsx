'use client';
import { FormEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { loginUser } from '@/redux/auth/auth.slice';
import useAuth from '@/hooks/useAuth';
import Input, { PasswordInputLogin } from '@/components/global/CustomInputs';

const Login = () => {
	const dispatch = useAppDispatch();

	const [data, setData] = useState({
		username: '',
		password: '',
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		const { username, password } = data;

		const payload = {
			username,
			password,
		};

		dispatch(loginUser(payload));
	};
	const handleChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	// Account Verification
	const { user } = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (user.user || localStorage.getItem('session-user')) router.push('/');
	});

	return (
		<div className='p-4 sm:p-7'>
			<div className='text-center'>
				<h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
					Se connecter
				</h1>
				<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
					Veuillez saisir vos identifiants de connexion
				</p>
			</div>
			<div className='mt-5'>
				{/* Form */}
				<form onSubmit={submit}>
					<div className='grid gap-y-4'>
						{/* Form Group */}
						<Input
							label="E-mail ou nom d'utilisateur"
							name='username'
							placeholder='Entrer votre email'
							full={false}
							type='text'
							value={data.username}
							error=''
							onChange={handleChange}
							required
							aria-describedby='email-error'
						/>
						{/* End Form Group */}
						{/* Form Group */}
						<PasswordInputLogin
							label='Mot de passe'
							name='password'
							placeholder='Entrer mot de passe'
							full={false}
							type='password'
							value={data.password}
							error=''
							onChange={handleChange}
							required
							aria-describedby='password-error'
						/>
						{/* End Form Group */}
						{/* Checkbox */}
						<div className='flex items-center'>
							<div className='flex'>
								<input
									id='remember-me'
									name='remember-me'
									type='checkbox'
									className='shrink-0 mt-0.5 border-gray-200 rounded text-primary-600 pointer-events-none focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary-500 dark:checked:border-primary-500 dark:focus:ring-offset-gray-800'
								/>
							</div>
							<div className='ml-3'>
								<label
									htmlFor='remember-me'
									className='text-sm dark:text-white'
								>
									Remember me
								</label>
							</div>
						</div>
						{/* End Checkbox */}
						<button
							type='submit'
							className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
						>
							{user.status.isLoading ? (
								<span
									hidden={user.status.isLoading}
									className='w-6 h-6 inline-block animate-spin border border-transparent border-t-neutral-200 rounded-full'
								/>
							) : (
								<span className='h-6'>Se connecter</span>
							)}
						</button>
					</div>
				</form>
				{/* End Form */}
			</div>
		</div>
	);
};

export default Login;
