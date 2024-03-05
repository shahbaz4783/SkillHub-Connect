interface SignupFormProps {
	id: number;
	name: 'name' | 'email' | 'password' | 'passwordConfirm';
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
	name: 'title' | 'description' | 'tags' | 'price' | 'time' | 'category';
	type: 'text' | 'number' | 'file';
	label: string;
	placeholder: string;
}

interface JobPostProps {
	id: number;
	name:
		| 'title'
		| 'description'
		| 'skills'
		| 'price'
		| 'location'
		| 'category'
		| 'experience';
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
		name: 'email',
		type: 'email',
		label: 'Email',
		placeholder: 'johndoe@mail.com',
	},
	{
		id: 3,
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: 'Enter your password',
	},
	{
		id: 4,
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
		label: 'Enter the tags of your service',
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
	{
		id: 6,
		name: 'category',
		type: 'text',
		label: 'Enter the Category',
		placeholder: '',
	},
];

export const jobPostFormFields: JobPostProps[] = [
	{
		id: 1,
		name: 'title',
		type: 'text',
		label: 'Enter the title of the job',
		placeholder: '',
	},
	{
		id: 2,
		name: 'location',
		type: 'text',
		label: 'Enter the location of the service',
		placeholder: '',
	},
	{
		id: 3,
		name: 'skills',
		type: 'text',
		label: 'Which skills are required?',
		placeholder: '',
	},
	{
		id: 4,
		name: 'price',
		type: 'number',
		label: 'Enter the salary of the job',
		placeholder: '',
	},
	{
		id: 5,
		name: 'description',
		type: 'text',
		label: 'Write brief description of the job',
		placeholder: '',
	},
	{
		id: 6,
		name: 'category',
		type: 'text',
		label: 'Enter the Category',
		placeholder: '',
	},
	{
		id: 7,
		name: 'experience',
		type: 'text',
		label: 'Enter the experience level required',
		placeholder: '',
	},
];