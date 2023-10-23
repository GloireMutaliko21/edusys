const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const authUrls = {
	login: `${apiUrl}staffs/login`,
	editPassword: `${apiUrl}auth/password`,
};

export const studentUrls = {
	getAll: `${apiUrl}students`,
	getOne: (id: string | number) => `${apiUrl}students/${id}`,
};
