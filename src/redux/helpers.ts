const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const authUrls = {
	login: `${apiUrl}staffs/login`,
	editPassword: `${apiUrl}auth/password`,
};
