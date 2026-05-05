import { useMemo } from "react";
import { Message, ErrorOutline } from "@mui/icons-material";
import { Icon } from "./icon";

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

const TextArea: React.FC<Props> = ({
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
        return "border border-red-300 bg-white/50 backdrop-blur-md placeholder-gray-400 text-slate-700 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 shadow-sm";
      case "disabled":
        return "border border-gray-200 bg-gray-100/50 backdrop-blur-md opacity-50 placeholder-gray-400 text-slate-700 text-sm rounded-xl block w-full p-3 focus:outline-none transition-all duration-300 shadow-sm";
      default:
        return "border border-gray-200 bg-white/50 hover:bg-white/80 backdrop-blur-md placeholder-gray-400 text-slate-700 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm";
    }
  }, [type]);

  const iconPos = icon === "left" ? "pl-10" : icon === "right" ? "pr-10" : "";
  const iconColor = type === "error" ? "text-red-200" : "text-gray-300";

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-semibold text-slate-700 tracking-wide">
        {label}
      </label>
      <div className="relative flex items-start">
        <textarea
          className={`${fieldClass} ${iconPos}`}
          disabled={isDisabled}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={6}
        ></textarea>

        {icon === "left" && (
          <span className="absolute left-2.5 top-3.5 flex items-center">
            <Icon type={Message} className={`w-5 h-5 ${iconColor}`} />
          </span>
        )}
        {icon === "right" && (
          <span className="absolute right-2.5 top-3.5 flex items-center">
            <Icon type={Message} className={`w-5 h-5 ${iconColor}`} />
          </span>
        )}
      </div>

      {type === "error" && (
        <div className="flex items-center mt-1">
          <span className="font-medium mr-1.5 flex items-center">
            <Icon type={ErrorOutline} className="w-5 h-5 text-red-400" />
          </span>
          <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextArea;
