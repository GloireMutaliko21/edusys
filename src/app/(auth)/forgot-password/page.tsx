'use client';
import Input from '@/components/global/CustomInputs';
import Link from 'next/link';
import { useState } from 'react';

function ForgotPassword() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	return (
		<div className='p-4 sm:p-7'>
			<div className='text-center'>
				<h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
					Mot de passe oublié ?
				</h1>
				<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
					<Link
						className='text-primary-600 decoration-2 hover:underline font-medium'
						href='/login'
					>
						Se connecter ici
					</Link>
				</p>
			</div>
			<div className='mt-5'>
				{/* Form */}
				<form>
					<div className='grid gap-y-4'>
						{/* Form Group */}
						<Input
							label='Adresse e-mail'
							name='email'
							placeholder='Entrer votre email'
							full={false}
							type='text'
							value={formData.email}
							error=''
							onChange={(e) =>
								setFormData({ ...formData, email: e.currentTarget.value })
							}
							required
							aria-describedby='email-error'
						/>
						{/* End Form Group */}
						<button
							type='submit'
							className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary-700 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
						>
							Réinitialiser le mot de passe
						</button>
					</div>
				</form>
				{/* End Form */}
			</div>
		</div>
	);
}

export default ForgotPassword;
