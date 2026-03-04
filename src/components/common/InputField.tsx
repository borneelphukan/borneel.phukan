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
        return "border border-red-300 bg-white/50 backdrop-blur-md placeholder-gray-400 text-slate-700 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 shadow-sm";
      case "disabled":
        return "border border-gray-200 bg-gray-100/50 backdrop-blur-md opacity-50 placeholder-gray-400 text-slate-700 text-sm rounded-xl block w-full p-3 focus:outline-none transition-all duration-300 shadow-sm";
      default:
        return "border border-gray-200 bg-white/50 hover:bg-white/80 backdrop-blur-md placeholder-gray-400 text-slate-700 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm";
    }
  }, [statusType]);

  const iconPos = icon === "left" ? "pl-10" : icon === "right" ? "pr-10" : "";
  const iconColor = statusType === "error" ? "text-red-200" : "text-gray-300";

  return (
    <div className="w-full">
      <label
        htmlFor={calendar ? "calendar" : password ? "password" : id}
        className="block mb-2 text-sm font-semibold text-slate-700 tracking-wide"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className={`${fieldClass} ${iconPos} h-12`}
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
