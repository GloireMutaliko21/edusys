const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const authUrls = {
	login: `${apiUrl}staffs/login`,
	editPassword: `${apiUrl}auth/password`,
};

export const institutionUrls = {
	getAll: `${apiUrl}institution`,
	getOne: `${apiUrl}institution/one`,
	add: `${apiUrl}institution/add`,
	update: (id: string | number) => `${apiUrl}institution/update?id=${id}`,
};

export const studentUrls = {
	getAll: `${apiUrl}students`,
	getAllData: `${apiUrl}students/data`,
	getOne: (id: string | number) => `${apiUrl}students/one?id=${id}`,
};

export const sessionUrls = {
	getAll: `${apiUrl}sessions`,
	getOne: (id: string | number) => `${apiUrl}sessions/${id}`,
};

export const sectionUrls = {
	getAll: `${apiUrl}sections`,
	getOne: (id: string | number) => `${apiUrl}sections/${id}`,
};

export const feeTypeUrls = {
	getAll: `${apiUrl}feeType`,
	getOne: (id: string | number) => `${apiUrl}feeType/${id}`,
};

export const staffUrls = {
	getAll: `${apiUrl}staffs`,
	getOne: (id: string | number) => `${apiUrl}staffs/${id}`,
};

export const classesUrls = {
	getAll: `${apiUrl}classes`,
	getOne: (id: string | number) => `${apiUrl}classes/${id}`,
};
