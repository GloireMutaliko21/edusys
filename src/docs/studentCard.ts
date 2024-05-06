import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode';
import { fontBold, fontMedium, fontNormal, fontSemiBold } from '@/assets/fonts';

export async function generateStudentCard(
	student: StudentGlobal,
	institution: Institution
) {
	(function (jsPDFAPI: typeof jsPDF.API) {
		const callAddFont = function (this: any) {
			this.addFileToVFS('Cairo-Regular-normal.ttf', fontNormal);
			this.addFont('Cairo-Regular-normal.ttf', 'Cairo-Regular', 'normal');
			this.addFileToVFS('Cairo-Medium-normal.ttf', fontMedium);
			this.addFont('Cairo-Medium-normal.ttf', 'Cairo-Medium', 'normal');
			this.addFileToVFS('Cairo-SemiBold-normal.ttf', fontSemiBold);
			this.addFont('Cairo-SemiBold-normal.ttf', 'Cairo-SemiBold', 'normal');
			this.addFileToVFS('Cairo-Bold-normal.ttf', fontBold);
			this.addFont('Cairo-Bold-normal.ttf', 'Cairo-Bold', 'normal');
		};
		jsPDFAPI.events.push(['addFonts', callAddFont]);
	})(jsPDF.API);

	const doc = new jsPDF({
		orientation: 'landscape',
		unit: 'in',
		format: [3.34646, 2.16535],
	});

	// recto
	// =================================================================

	doc.addImage('/images/Carte_etudiant.jpg', 'PNG', 0, 0, 3.34646, 2.16535);

	// doc.addImage(institution?.logoInstitution, 'PNG', 0.05, 0.05, 0.6, 0.6);
	doc.addImage("/images/logo.jpg", 'PNG', 0.05, 0.05, 0.4, 0.4);
	// doc.addImage(institution?.logoPays, 'PNG', 2.8, 0.05, 0.5, 0.5);

	doc.setFont('Cairo-Bold');

	doc.setTextColor('#ffffff');
	doc.setFontSize(6.5);
	// doc.text(institution?.designation.slice(0, 42), 1.67323, 0.26, {
	// 	align: 'center',
	// });



	doc.setFontSize(9);
	// doc.text(institution?.sigle, 1.67323, 0.4, { align: 'center' });
	doc.setFontSize(6);
	// doc.setTextColor('#000000');
	doc.text("REPUBLIQUE DEMOCRATIQUE DU CONGO", 1.67323, 0.13, { align: 'center' });
		doc.setFontSize(6);
	doc.text("ENSEIGNEMENT SUPERIEUR ET UNIVERSITAIRE", 1.67323, 0.25, { align: 'center' });
			doc.setFontSize(6);
	doc.text("INST. SUPERIEUR DE DEVELOPPEMENT RURAL DES GRANDS LACS", 1.67323, 0.37, { align: 'center' });
	doc.setFontSize(14);
	doc.setTextColor('#f8fafc');
	doc.text("«ISDR/GL»", 1.67323, 0.55, { align: 'center' });

	
	doc.setTextColor('#000000');
	doc.setFont('Cairo-Regular');
	doc.setFontSize(7);

	doc.text('Nom', 0.15, 0.8);
	doc.text('Postnom & prénom', 0.15, 0.95);
	doc.text('Matricule', 0.15, 1.10);
	doc.text('Promotion', 0.15, 1.25);
	doc.text('Section', 0.15, 1.4);
	doc.text('Année acad.', 0.15, 1.55);

	doc.setFont('Cairo-Bold');
	doc.text(`: ${student.student.firstname}`, 1,0.8);
	doc.text(`: ${student.student.lastname}`, 1, 0.95);
	doc.text(`: ${student.student.admission_no}`, 1, 1.10);
	doc.text(`: ${student.class.class}`, 1, 1.25);
	doc.text(`: ${student.section.section.slice(0, 33)}`, 1, 1.4);
	doc.text(
		`: ${student.session.session.slice(
			0,
			student.session.session.indexOf('-') + 1
		)}20${student.session.session.slice(
			student.session.session.indexOf('-') + 1
		)}`,
		1,
		1.55
	);

	doc.setFontSize(7);
	doc.setFont('Cairo-Regular');
	doc.setTextColor('#0891b2');
	doc.text("Le Secrétaire Général Académique", 1.67323, 1.75, { align: 'center' });

    doc.setFontSize(7);
	doc.setFont('Cairo-Bold');
	doc.text("C.T. Master Claudine Mafuko", 1.67323, 2.05, { align: 'center' });
	doc.addImage('/images/avatar.jpg', 'PNG', 2.6, 0.8, 0.7, 0.7);

	const qrCodeData = await QRCode.toDataURL(
		JSON.stringify({
			id: student?.student.id,
			matricule: student?.student?.admission_no,
		})
	);
	// doc.addImage(qrCodeData, 'PNG', 2.55, 1.37, 0.8, 0.8);


	// verso
	// ==================================================================
	doc.addPage([3.34646, 2.16535], 'landscape');
	doc.addImage('/images/Carte_etudiant.jpg', 'PNG', 0, 0, 3.34646, 2.16535);

	doc.addImage(qrCodeData, 'PNG', 0.04, 0.9, 0.7, 0.8);
	doc.setFont('Cairo-Bold');
	doc.setTextColor('#f8fafc');
	doc.setFontSize(14);
	doc.text("CARTE D'ETUDIANT" , 1.67323,0.25, { align: 'center' });
	doc.setFont('Cairo-Regular');
	// doc.text('Le Secrétaire Général Académique', 0.1, 1.2);
	// doc.addImage(institution.signature, 'PNG', 0.2, 1.3, 1, 0.15);
	// doc.text(
	// 	`CT. ${institution.staff?.name} ${institution.staff?.surname}`,
	// 	0.1,
	// 	1.55
	// );

	doc.setTextColor('#000000');
	doc.setFontSize(12);
	doc.text('Laissez-passer', 2, 1.7, {
		align: 'center',
	});
	doc.setTextColor('#6a0719');
	doc.setFontSize(7);
	doc.text('Les autorités tant civiles que militaires et celles de', 2, 1.85, {
		align: 'center',
	});
	doc.text(
		"la police nationale sont priées d'apporter leur secours",
		2,
		1.975,
		{
			align: 'center',
		}
	);
	doc.text('au porteur de la présente en cas de nécessité', 2, 2.1, {
		align: 'center',
	});

	doc.save(
		`student_card-${student.student.firstname}-${student.student.lastname}.pdf`
	);
}
