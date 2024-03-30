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