'use client';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import useStaff from '@/hooks/useStaff';
import { updateInstitution } from '@/redux/institution/institution.slice';
import { Button, Drawer, Form, Input, Select } from 'antd';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { BiSolidImageAdd } from 'react-icons/bi';

const UpdateInstitution = ({
	openDrawer,
	setOpenDrawer,
}: {
	openDrawer: any;
	setOpenDrawer: any;
}) => {
	const inputLogoInstitution = useRef(null);
	const inputLogoPays = useRef(null);
	const inputLogoSignature = useRef(null);

	const onClose = () => {
		setOpenDrawer(false);
	};
	const dispatch = useAppDispatch();
	const { status, institution } = useAppSelector((state) => state.institution);
	const { staffs, status: staffStatus } = useStaff();

	const [logoInstitution, setLogoInstitution] = useState<File>(
		new File([institution?.logoInstitution!], '', { type: 'image/jpeg' })
	);
	const [logoPays, setLogoPays] = useState<File>(
		new File([institution?.logoPays!], '', { type: 'image/jpeg' })
	);
	const [logoSignature, setLogoSignature] = useState<File>(
		new File([institution?.signature!], '', { type: 'image/jpeg' })
	);

	const handleChangeLogoInst = (e: any) => {
		setLogoInstitution(e.target.files[0]);
	};
	const handleChangeLogoPays = (e: any) => {
		setLogoPays(e.target.files[0]);
	};
	const handleChangeLogoSignature = (e: any) => {
		setLogoSignature(e.target.files[0]);
	};

	const onSubmit = (values: any) => {
		const { designation, sigle, staffs_id } = values;
		dispatch(
			updateInstitution({
				id: institution?.id!,
				designation,
				sigle,
				staffs_id,
				images: [logoInstitution, logoPays, logoSignature],
			})
		);
	};

	return (
		<Drawer
			placement='right'
			onClose={onClose}
			destroyOnClose={true}
			open={openDrawer}
			title={<p className='!font-bold text-xl'>Mise à jour Institution</p>}
			footer={null}
		>
			<Form onFinish={onSubmit} layout='vertical'>
				<Form.Item
					name='designation'
					label='Désignation'
					style={{ marginBottom: '6px' }}
					rules={[{}]}
				>
					<Input size='small' />
				</Form.Item>
				<Form.Item
					name='sigle'
					label='Sigle'
					style={{ marginBottom: '6px' }}
					rules={[{}]}
				>
					<Input size='small' />
				</Form.Item>
				<Form.Item
					name='staffs_id'
					style={{ marginBottom: '6px' }}
					label='Agent signataire'
				>
					<Select
						placeholder='Agent'
						optionLabelProp='label'
						size='small'
						loading={staffStatus.isLoading}
						options={staffs.map((staff) => ({
							label: `${staff.name} ${staff.surname}`,
							value: staff.id,
						}))}
						showSearch
						filterOption={(input, option) =>
							(option?.label ?? '').includes(input) ||
							(option?.label ?? '').toLowerCase().includes(input) ||
							(option?.label ?? '').toUpperCase().includes(input)
						}
					/>
				</Form.Item>

				<div className='grid grid-cols-3'>
					<Form.Item name='logoInstitution' label='Logo Institution'>
						<div
							className={`flex justify-center items-center w-24 h-24 border border-dashed border-slate-400 bg-gray-200 rounded cursor-pointer`}
							//@ts-ignore
							onClick={() => inputLogoInstitution.current?.click()}
						>
							<div className={`'relative'`}>
								{logoInstitution && (
									<Image
										width={100}
										height={100}
										src={
											logoInstitution
												? URL.createObjectURL(logoInstitution)
												: '/images/logo.png'
										}
										alt=''
										className='object-cover h-20 w-20'
									/>
								)}
								<div className='bg-black/10 w-24 h-24 absolute top-0 left-0 flex justify-center items-center'>
									<BiSolidImageAdd className='text-2xl text-cyan-950' />
								</div>
							</div>
						</div>
						<div className='!hidden'>
							<input
								type='file'
								hidden
								ref={inputLogoInstitution}
								onChange={handleChangeLogoInst}
							/>
						</div>
					</Form.Item>
					<Form.Item name='logoPays' label='Logo pays'>
						<div
							className={`flex justify-center items-center w-24 h-24 border border-dashed border-slate-400 bg-gray-200 rounded cursor-pointer`}
							//@ts-ignore
							onClick={() => inputLogoPays.current?.click()}
						>
							<div className={`'relative'`}>
								{logoPays && (
									<Image
										width={100}
										height={100}
										src={
											logoPays
												? URL.createObjectURL(logoPays)
												: '/images/logo.png'
										}
										alt=''
										className='object-cover h-20 w-20'
									/>
								)}
								<div className='bg-black/10 w-24 h-24 absolute top-0 left-0 flex justify-center items-center'>
									<BiSolidImageAdd className='text-2xl text-cyan-950' />
								</div>
							</div>
						</div>
						<div className='!hidden'>
							<input
								type='file'
								hidden
								ref={inputLogoPays}
								onChange={handleChangeLogoPays}
							/>
						</div>
					</Form.Item>
					<Form.Item name='Signature' label='Signature'>
						<div
							className={`flex justify-center items-center w-24 h-24 border border-dashed border-slate-400 bg-gray-200 rounded cursor-pointer`}
							//@ts-ignore
							onClick={() => inputLogoSignature.current?.click()}
						>
							<div className={`'relative'`}>
								{logoSignature && (
									<Image
										width={100}
										height={100}
										src={
											logoSignature
												? URL.createObjectURL(logoSignature)
												: '/images/logo.png'
										}
										alt=''
										className='object-cover h-20 w-20'
									/>
								)}
								<div className='bg-black/10 w-24 h-24 absolute top-0 left-0 flex justify-center items-center'>
									<BiSolidImageAdd className='text-2xl text-cyan-950' />
								</div>
							</div>
						</div>
						<div className='!hidden'>
							<input
								type='file'
								hidden
								ref={inputLogoSignature}
								onChange={handleChangeLogoSignature}
							/>
						</div>
					</Form.Item>
				</div>
				<Form.Item style={{ marginBottom: '6px' }}>
					<div className='flex justify-end w-full gap-4'>
						<Button size='middle' onClick={onClose}>
							Annuler
						</Button>
						<Button htmlType='submit' loading={status.isLoading}>
							Soumettre
						</Button>
					</div>
				</Form.Item>
			</Form>
		</Drawer>
	);
};

export default UpdateInstitution;
