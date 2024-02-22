interface SignupFormProps {
	id: number;
	name: 'name' | 'username' | 'email' | 'password' | 'passwordConfirm';
	type: string;
	label: string;
	placeholder: string;
}

interface LoginFormProps {
	id: number;
	name: 'email' | 'password';
	type: string;
	label: string;
	placeholder: string;
}

export const loginFormInput: LoginFormProps[] = [
	{
		id: 1,
		name: 'email',
		type: 'email',
		label: 'Email',
		placeholder: 'johndoe@mail.com',
	},
	{
		id: 2,
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: 'Enter your password',
	},
];

export const signUpFormInput: SignupFormProps[] = [
	{
		id: 1,
		name: 'name',
		type: 'text',
		label: 'Name',
		placeholder: 'john doe',
	},
	{
		id: 2,
		name: 'username',
		type: 'text',
		label: 'Username',
		placeholder: 'johndo331',
	},
	{
		id: 3,
		name: 'email',
		type: 'email',
		label: 'Email',
		placeholder: 'johndoe@mail.com',
	},
	{
		id: 4,
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: 'Enter your password',
	},
	{
		id: 5,
		name: 'passwordConfirm',
		type: 'password',
		label: 'Confirm Password',
		placeholder: 'Confirm your password',
	},
];
