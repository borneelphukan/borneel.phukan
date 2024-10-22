import { useMemo } from "react";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-5 h-5 ${iconColor}`}
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </span>
        )}
        {icon === "right" && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-5 h-5 ${iconColor}`}
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </span>
        )}
      </div>
      {statusType === "error" && (
        <div className="flex items-center mt-1">
          <span className="font-medium mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
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
