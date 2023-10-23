'use client';
import PageHeader from '@/components/global/PageHeader';
import useClasses from '@/hooks/useClasse';
import { Input, Select } from 'antd';
import { useState } from 'react';

const Page = () => {
	const [searchedText, setSearchedText] = useState('');
	const [filtered, setFiltered] = useState<string[]>([]);

	const { classes } = useClasses();

	return (
		<main className='flex flex-col h-full'>
			<PageHeader title='Etudiants' />
			<section className='mt-2 flex-grow bg-white mb-5 p-5 rounded-lg'>
				<div className='w-full flex flex-col md:flex-row gap-3 justify-end items-center mb-5'>
					<div className='w-full md:w-auto'>
						<Select
							onChange={(v) => setFiltered(v)}
							value={filtered}
							mode='multiple'
							placeholder='Filtrer'
							optionLabelProp='label'
							placement='topRight'
							options={classes.map((classe) => ({
								label: classe.class,
								value: classe.class,
							}))}
							className='!w-64'
						/>
					</div>
					<div className='w-full md:w-auto'>
						<Input.Search
							placeholder='Rechercher un étudiant'
							onSearch={(v) => setSearchedText(v)}
							onChange={(e) => setSearchedText(e.target.value)}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Page;
