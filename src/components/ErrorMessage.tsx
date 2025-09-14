import { Info } from "lucide-react";

const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <span className="error-message text-sm text-[#D80000] flex items-center gap-1">
      <Info className="w-4 h-4" />
      {message}
    </span>
  );
};

export default ErrorMessage;
