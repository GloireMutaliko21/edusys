interface GeneralInfos {
	id: string | number;
	is_active?: 'yes' | 'no' | number;
	createdAt?: Date;
	created_at?: Date | string;
	updatedAt?: Date;
	updated_at?: Date | string;
	deletedAt?: Date;
	disable_At?: Date | string;
}

interface Student extends GeneralInfos {
	parent_id: number;
	admission_no: string;
	roll_no?: any;
	admission_date: Date;
	firstname: string;
	middlename?: any;
	lastname: string;
	rte?: any;
	image?: any;
	mobileno: string;
	email?: string;
	state?: string;
	city?: string;
	pincode?: string;
	religion?: string;
	cast?: any;
	dob?: Date;
	gender: string;
	current_address?: string;
	permanent_address?: string;
	category_id?: string | number;
	route_id?: string | number;
	school_house_id?: string | number;
	blood_group?: any;
	vehroute_id?: string | number;
	hostel_room_id?: string | number;
	adhar_no?: string | number;
	samagra_id?: string | number;
	bank_account_no?: string;
	bank_name: string;
	ifsc_code?: string | number;
	guardian_is?: any;
	father_name?: string;
	father_phone?: string;
	father_occupation?: string;
	mother_name?: string;
	mother_phone?: string;
	mother_occupation?: string;
	guardian_name?: string;
	guardian_relation?: string;
	guardian_phone?: string;
	guardian_occupation?: string;
	guardian_address?: string;
	guardian_email?: string;
	father_pic?: any;
	mother_pic?: any;
	guardian_pic?: any;
	previous_school?: string;
	height?: string | number;
	weight?: string | number;
	measurement_date?: string | Date;
	dis_reason: number;
	note?: any;
	dis_note?: any;
	app_key?: any;
	parent_app_key?: any;
}

interface Session extends GeneralInfos {
	session: string;
}

interface FeeType extends GeneralInfos {
	is_system: number;
	feecategory_id?: string | number;
	type: string;
	code: string;
	description: string;
}

interface Staff extends GeneralInfos {
	lang_id: number;
	department: number;
	designation?: number;
	qualification?: string;
	work_exp?: Date | string;
	name: string;
	surname: string;
	father_name?: string;
	mother_name?: string;
	contact_no?: string;
	emergency_contact_no?: string;
	email: string;
	dob?: Date | string;
	marital_status: string;
	date_of_joining?: Date | string;
	date_of_leaving?: Date | string;
	local_address?: string;
	permanent_address?: string;
	note?: string;
	image?: string;
	password?: string;
	gender: string;
	account_title?: string;
	bank_account_no?: string;
	bank_name?: string;
	ifsc_code?: string;
	bank_branch?: string;
	payscale?: string;
	basic_salary?: string;
	epf_no?: string;
	contract_type: string;
	shift?: string;
	location?: string;
	facebook?: string;
	twitter?: string;
	linkedin?: string;
	instagram?: string;
	resume?: string;
	joining_letter?: string;
	resignation_letter?: string;
	other_document_name: string;
	other_document_file?: string;
	user_id: number;
	verification_code?: string;
	zoom_api_key?: string;
	zoom_api_secret?: string;
	disable_at?: Date | string;
}

interface Classe extends GeneralInfos {
	class: string;
}

interface User extends GeneralInfos {
	username: string;
	email: string;
	password?: string;
	status: boolean;
	type: string;
	other?: Record<string, any>;
	token?: string;
}
