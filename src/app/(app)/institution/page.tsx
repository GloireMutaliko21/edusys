'use client';
import PageHeader from '@/components/global/PageHeader';
import UpdateInstitution from '@/components/modals/UpdateInstitution';
import useInstitution from '@/hooks/useInstitution';
import { Descriptions, Divider } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
	const { institution } = useInstitution();

	const [openDrawer, setOpenOpenDrawer] = useState(false);

	const showDrawer = () => {
		setOpenOpenDrawer(true);
	};

	const UpdateInstitutionButton = () => {
		return (
			<div className=''>
				<button onClick={showDrawer}>Modifier les infos</button>
			</div>
		);
	};
	return (
		<main className='flex flex-col h-full'>
			<PageHeader
				title='Institution'
				actionButton={<UpdateInstitutionButton />}
			/>
			<section className='mt-2 flex-grow bg-white dark:bg-gray-800 dark:border-gray-700 mb-5 p-5 rounded-lg'>
				<div>
					<Divider
						orientation='left'
						orientationMargin={0}
						className='text-lg !font-bold !text-slate-700'
					>
						Informations
					</Divider>
					<Descriptions
						title={null}
						size='small'
						column={1}
						items={[
							{
								key: '1',
								label: 'Désignation',
								children: institution?.designation,
							},
							{
								key: '2',
								label: 'Sigle',
								children: institution?.sigle,
							},
							{
								key: '3',
								label: 'Agent signataire',
								children: `${institution?.staff?.name} ${institution?.staff?.surname}`,
							},
							{
								key: '4',
								label: 'Logos',
								children: (
									<div className='grid gap-3 lg:grid-cols-2 mb-5'>
										<div className='flex flex-col items-center justify-center'>
											<p className='text-primary-700'>Logo institution</p>
											<div className='w-24 h-24 rounded border'>
												<Image
													src={institution?.logoInstitution!}
													alt='Logo institution'
													width={200}
													height={200}
													className='w-full h-full'
												/>
											</div>
										</div>
										<div className='flex flex-col items-center justify-center'>
											<p className='text-primary-700'>Logo pays</p>
											<div className='w-24 h-24 rounded border'>
												<Image
													src={institution?.logoPays!}
													alt='Logo institution'
													width={200}
													height={200}
													className='w-full h-full'
												/>
											</div>
										</div>
									</div>
								),
							},
							{
								key: '5',
								label: 'Signature',
								children: (
									<div className='flex flex-col items-center justify-center'>
										<div className='w-24 h-24 rounded border'>
											<Image
												src={institution?.signature!}
												alt='Logo institution'
												width={200}
												height={200}
												className='w-full h-full'
											/>
										</div>
									</div>
								),
							},
						]}
					/>
				</div>
			</section>
			<UpdateInstitution
				openDrawer={openDrawer}
				setOpenDrawer={setOpenOpenDrawer}
			/>
		</main>
	);
};

export default Page;
