import React, { useMemo } from "react";

type Props = {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  type?: "success" | "error" | "disabled" | "";
  icon?: "left" | "right" | "";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
};

const TextareaWithIcon: React.FC<Props> = ({
  label = "",
  placeholder = "",
  errorMessage = "That's an error!",
  isDisabled = false,
  type = "",
  icon = "",
  value,
  onChange,
  id,
}) => {
  const fieldClass = useMemo(() => {
    switch (type) {
      case "error":
        return "border border-gray-400 placeholder-gray-300 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-red-200";
      case "disabled":
        return "border border-gray-400 opacity-50 placeholder-gray-300 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-red-200";
      default:
        return "border border-gray-400 placeholder-gray-300 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1";
    }
  }, [type]);

  const iconPos = icon === "left" ? "pl-10" : icon === "right" ? "pr-10" : "";
  const iconColor = type === "error" ? "text-red-200" : "text-gray-300";

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <div className="relative flex items-start">
        <textarea
          className={`${fieldClass} ${iconPos} py-2 px-4 rounded bg-transparent`} // bg-transparent added here
          disabled={isDisabled}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={6}
        ></textarea>

        {icon === "left" && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-5 h-5 ${iconColor}`}
            >
              <path d="..." /> {/* Replace with your icon paths */}
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
              <path d="..." /> {/* Replace with your icon paths */}
            </svg>
          </span>
        )}
      </div>

      {type === "error" && (
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
              <path strokeLinecap="round" strokeLinejoin="round" d="..." />
              {/* Replace with your error icon path */}
            </svg>
          </span>
          <p className="text-sm text-red-200">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextareaWithIcon;
