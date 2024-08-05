import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormErrorProps {
	message?: string;
}

const FormSuccess = ({ message }: FormErrorProps) => {
	if (!message) {
		return null;
	}

	return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-600">
      <div>
        <CheckCircledIcon className="h-4 w-4" />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
