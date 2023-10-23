const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const authUrls = {
	login: `${apiUrl}staffs/login`,
	editPassword: `${apiUrl}auth/password`,
};

export const studentUrls = {
	getAll: `${apiUrl}students`,
	getOne: (id: string | number) => `${apiUrl}students/${id}`,
};

export const sessionUrls = {
	getAll: `${apiUrl}sessions`,
	getOne: (id: string | number) => `${apiUrl}sessions/${id}`,
};

export const feeTypeUrls = {
	getAll: `${apiUrl}feeType`,
	getOne: (id: string | number) => `${apiUrl}feeType/${id}`,
};

export const staffUrls = {
	getAll: `${apiUrl}staffs`,
	getOne: (id: string | number) => `${apiUrl}staffs/${id}`,
};
