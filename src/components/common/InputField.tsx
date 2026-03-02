import { useMemo } from "react";
import EmailIcon from '@mui/icons-material/Email';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type Props = {
  label?: string;
  placeholder?: string;
  optionalMessage?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  statusType?: "success" | "error" | "disabled" | "";
  icon?: "left" | "right" | "";
  calendar?: boolean;
  password?: boolean;
  inputType?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
};

const InputField: React.FC<Props> = ({
  label = "",
  placeholder,
  optionalMessage,
  errorMessage = "That's an error!",
  isDisabled = false,
  statusType = "",
  icon = "",
  calendar = false,
  password = false,
  inputType = "text",
  value,
  onChange,
  id,
}) => {
  const fieldClass = useMemo(() => {
    switch (statusType) {
      case "error":
        return "border border-gray-400 placeholder-gray-300 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-red-200";
      case "disabled":
        return "border border-gray-400 opacity-50 placeholder-gray-300 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-red-200";
      default:
        return "border border-gray-400 placeholder-gray-300 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1";
    }
  }, [statusType]);

  const iconPos = icon === "left" ? "pl-10" : icon === "right" ? "pr-10" : "";
  const iconColor = statusType === "error" ? "text-red-200" : "text-gray-300";

  return (
    <div className="w-full">
      <label
        htmlFor={calendar ? "calendar" : password ? "password" : id}
        className="block mb-1 text-sm font-medium "
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className={`${fieldClass} ${iconPos} py-2 px-4 h-12 rounded bg-transparent`} // bg-transparent added here
          disabled={isDisabled}
          type={calendar ? "date" : password ? "password" : inputType}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {icon === "left" && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <EmailIcon className={`w-5 h-5 ${iconColor}`} />
          </span>
        )}
        {icon === "right" && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <EmailIcon className={`w-5 h-5 ${iconColor}`} />
          </span>
        )}
      </div>
      {statusType === "error" && (
        <div className="flex items-center mt-1">
          <span className="font-medium mr-2">
            <InfoOutlinedIcon className="w-6 h-6 text-red-200" />
          </span>
          <p className="text-sm text-red-200">{errorMessage}</p>
        </div>
      )}
      {optionalMessage && (
        <div className="flex items-center mt-1">
          <p className="text-sm text-gray-300">{optionalMessage}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;
