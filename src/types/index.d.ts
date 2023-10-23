interface User extends GeneralInfos {
	username: string;
	email: string;
	password?: string;
	status: boolean;
	type: string;
	other?: Record<string, any>;
	token?: string;
}
