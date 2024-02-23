interface SignupFormProps {
	id: number;
	name: 'name' | 'username' | 'email' | 'password' | 'passwordConfirm';
	type: 'text' | 'number' | 'email' | 'password';
	label: string;
	placeholder: string;
}

interface LoginFormProps {
	id: number;
	name: 'email' | 'password';
	type: 'text' | 'number' | 'email' | 'password';
	label: string;
	placeholder: string;
}

interface ServicePostProps {
	id: number;
	name: 'title' | 'description' | 'tags' | 'price' | 'time';
	type: 'text' | 'number' | 'file';
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

export const servicePostFormFields: ServicePostProps[] = [
	{
		id: 1,
		name: 'title',
		type: 'text',
		label: 'Enter the title of your service',
		placeholder: '',
	},
	{
		id: 2,
		name: 'tags',
		type: 'text',
		label: 'Enter the title of your service',
		placeholder: '',
	},
	{
		id: 3,
		name: 'time',
		type: 'number',
		label: 'In how many days you can deliver?',
		placeholder: '',
	},
	{
		id: 4,
		name: 'price',
		type: 'number',
		label: 'Enter the price of your service',
		placeholder: '',
	},
	{
		id: 5,
		name: 'description',
		type: 'text',
		label: 'Write brief description of your service',
		placeholder: '',
	},
];