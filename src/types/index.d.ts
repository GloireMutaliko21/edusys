interface GeneralInfos {
	id: string | number;
	is_active?: 'yes' | 'no';
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

interface User extends GeneralInfos {
	username: string;
	email: string;
	password?: string;
	status: boolean;
	type: string;
	other?: Record<string, any>;
	token?: string;
}
