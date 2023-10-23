'use client';
import PageHeader from '@/components/global/PageHeader';
import { filterStudents } from '@/features/filter';
import useClasses from '@/hooks/useClasse';
import useSection from '@/hooks/useSection';
import useStudents from '@/hooks/useStudent';
import { Input, Select, Table, Tag } from 'antd';
import { useState } from 'react';

const Page = () => {
	const [searchedText, setSearchedText] = useState('');
	const [filteredPromotion, setFilteredPromotion] = useState<string[]>([]);
	const [filteredSection, setFilteredSection] = useState<string[]>([]);

	const { classes } = useClasses();
	const { sections } = useSection();
	const { students } = useStudents();

	return (
		<main className='flex flex-col h-full'>
			<PageHeader title='Etudiants' />
			<section className='mt-2 flex-grow bg-white dark:bg-gray-800 dark:border-gray-700 mb-5 p-5 rounded-lg'>
				<div className='w-full flex flex-col md:flex-row gap-3 justify-end items-center mb-5'>
					<div className='w-full md:w-auto'>
						<Select
							onChange={(v) => setFilteredPromotion(v)}
							value={filteredPromotion}
							mode='multiple'
							placeholder='Promotion'
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
						<Select
							onChange={(v) => setFilteredSection(v)}
							value={filteredSection}
							mode='multiple'
							placeholder='Section'
							optionLabelProp='label'
							placement='topRight'
							options={sections.map((section) => ({
								label: section.section,
								value: section.section,
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
				<Table
					size='small'
					pagination={{ hideOnSinglePage: true, pageSize: 12 }}
					dataSource={students}
					columns={[
						{
							key: 'id',
							dataIndex: 'id',
							title: 'N°',
							render: (_, __, index) => index + 1,
							width: '3rem',
						},
						{
							key: 'matricule',
							dataIndex: 'matricule',
							title: 'Matricule',
							render: (_, { student }, __) => student.admission_no,
							width: '150px',
						},
						{
							key: 'names',
							dataIndex: 'names',
							title: 'Etudiant',
							render: (_, { student }, __) => (
								<p>
									{student.firstname}{' '}
									{student.middlename != 'NULL' ? student.middlename : ' '}{' '}
									{student.lastname}
								</p>
							),
							filteredValue: [
								...filteredPromotion,
								...filteredSection,
								searchedText,
							],
							onFilter: (value, { student, class: classe, section }) => {
								return filterStudents(
									filteredPromotion,
									filteredSection,
									value,
									classe,
									section,
									student
								);
							},
						},
						{
							key: 'promotion',
							dataIndex: 'promotion',
							title: 'Promotion',
							render: (_, student, __) => (
								<Tag color='blue'>
									{student.class?.class} {student.section?.section}
								</Tag>
							),
						},
						{
							key: 'amount',
							dataIndex: 'amount',
							title: 'Montant',
							render: (_, { student }, __) => student.gender,
							align: 'center',
							width: '130px',
						},
						{
							key: 'action',
							dataIndex: 'action',
							title: '',
							render: (_, { id }, __) => (
								<button
									className='border border-primary-500 text-primary-500 flex justify-center hover:text-primary-700 py-px px-4'
									// onClick={() => onUpdate(id)}
								>
									Imprimer la carte
								</button>
							),
						},
					]}
				/>
			</section>
		</main>
	);
};

export default Page;
