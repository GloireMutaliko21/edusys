import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode';
import { fontBold, fontMedium, fontNormal, fontSemiBold } from '@/assets/fonts';

export async function generateStudentCard(student: StudentGlobal) {
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
	doc.addImage('/images/logo.png', 'PNG', 0.05, 0.05, 0.5, 0.5);
	doc.addImage('/images/logo-rdc.png', 'PNG', 2.8, 0.05, 0.5, 0.5);

	doc.setFont('Cairo-Bold');
	doc.setFontSize(6.5);
	doc.text('Enseignemt Supérieur et Universitaire', 1.67323, 0.16, {
		align: 'center',
	});
	doc.setFontSize(5);
	doc.text(
		'INSTITUT SUPERIEUR DE DEVELOPPEMENT RURAL DES GRANDS LACS',
		1.67323,
		0.25,
		{
			align: 'center',
		}
	);
	doc.setTextColor('#00838F');
	doc.setFontSize(10);
	doc.text('ISDR/GL', 1.67323, 0.38, {
		align: 'center',
	});
	doc.setTextColor('#EA8000');
	doc.setFontSize(8);
	doc.text("CARTE D'ETUDIANT", 1.67323, 0.5, {
		align: 'center',
	});

	doc.setLineWidth(0.025);
	doc.setDrawColor(0, 131, 143);
	doc.line(0, 0.57, 3.34646, 0.56);

	doc.addImage(
		student.student.image! || '/images/logo.png',
		'PNG',
		0.05,
		0.7,
		0.8,
		0.8
	);
	doc.setFont('Cairo-Bold');
	doc.setTextColor('#000000');
	doc.setFontSize(7);

	doc.text('Noms', 0.9, 0.7);
	doc.text('Postnom&prenom', 0.9, 0.85);
	doc.text('Matricule', 0.9, 1);
	doc.text('Section', 0.9, 1.15);
	doc.text('Promotion', 0.9, 1.3);
	doc.text('Année acad.', 0.9, 1.45);
	doc.text('Téléphone', 0.9, 1.6);

	doc.text(`: ${student.student.firstname}`, 1.68, 0.7);
	doc.text(`: ${student.student.lastname}`, 1.68, 0.85);
	doc.text(`: ${student.student.admission_no}`, 1.68, 1);
	doc.text(`: ${student.section.section.slice(0, 33)}`, 1.68, 1.15);
	doc.text(`: ${student.class.class}`, 1.68, 1.3);
	doc.text(
		`: ${student.session.session.slice(
			0,
			student.session.session.indexOf('-') + 1
		)}20${student.session.session.slice(
			student.session.session.indexOf('-') + 1
		)}`,
		1.68,
		1.45
	);
	doc.text(`: ${student.student.mobileno.replaceAll('?', ' ')}`, 1.68, 1.6);

	const qrCodeData = await QRCode.toDataURL(
		JSON.stringify({
			id: student.student.id,
			matricule: student.student.admission_no,
		})
	);
	doc.addImage(qrCodeData, 'PNG', 2.55, 1.37, 0.8, 0.8);

	doc.setFont('Cairo-Regular');
	doc.text('Le Secrétaire Général Académique', 0.1, 1.8);
	doc.text('CT. Master Gloire Mutaliko', 0.1, 2.1);

	doc.addPage([3.34646, 2.16535], 'landscape');
	doc.setFontSize(18);
	doc.setTextColor('#00838F');
	doc.text('ISAGE-KB', 1.67323, 0.35, { align: 'center' });
	doc.addImage('/images/logo.png', 'PNG', 1.05, 0.4, 1.2, 1.2);
	doc.setFontSize(14);
	doc.text('CARTE DE SERVICE', 1.67323, 1.73, {
		align: 'center',
	});
	doc.setLineWidth(0.01);
	doc.line(0.8, 1.742, 2.6, 1.742);

	doc.setFontSize(7);
	doc.setTextColor('#000000');
	doc.text('Les autorités civiles et militaires sont priées', 1.67323, 2, {
		align: 'center',
	});
	doc.text("d'apporter assistance au porteur de la présente", 1.67323, 2.1, {
		align: 'center',
	});

	doc.save(
		`student_card-${student.student.firstname}-${student.student.lastname}.pdf`
	);
}
