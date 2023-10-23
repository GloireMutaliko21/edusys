export const filterStudents = (
	filteredPromotion: string[],
	filteredSection: string[],
	value: any,
	classe: Classe,
	section: Section,
	student: Student
) => {
	const { admission_no, firstname, lastname } = student;

	const promotionORSection =
		filteredPromotion.includes(classe?.class!) ||
		filteredSection.includes(section?.section!);
	const promotionANDSection =
		filteredPromotion.includes(classe?.class!) &&
		filteredSection.includes(section?.section!);

	const promANDSection =
		filteredPromotion.length > 0 && filteredSection.length > 0;
	const promORSection =
		filteredPromotion.length > 0 || filteredSection.length > 0;

	const filterPromotionSection = promANDSection
		? promotionANDSection
		: promotionORSection;

	const filterByName =
		String(admission_no).toLowerCase().includes(String(value).toLowerCase()) ||
		String(firstname.trim() + ' ' + lastname.trim())
			.toLowerCase()
			.includes(String(value).toLowerCase());

	const promORSectionANDName = filterPromotionSection && filterByName;
	const promORSectionORName = filterPromotionSection || filterByName;

	const filter = promORSection ? promORSectionANDName : promORSectionORName;

	return filter;
};
