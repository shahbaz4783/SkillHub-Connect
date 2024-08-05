import { TriangleAlert } from 'lucide-react';

interface FormErrorProps {
  message?: string | boolean;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <div>
        <TriangleAlert size={24} strokeWidth={1.25} />
      </div>

      <p>{message}</p>
    </div>
  );
};

export default FormError;
