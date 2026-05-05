import { forwardRef } from "react";
import { SvgIconProps } from "@mui/material";

export type IconColor = 'primary' | 'secondary' | 'default';
export type IconSize = 'lg' | 'md' | 'base' | 'sm' | 'xs';

export interface IconProps extends React.ComponentPropsWithoutRef<"span"> {
  type: React.ElementType<SvgIconProps>;
  color?: IconColor;
  size?: IconSize;
}

const Icon = forwardRef<HTMLElement, IconProps>(
  ({ type: MuiIconComponent, color = 'default', size = 'md', className = "", ...props }, ref) => {
    
    const colorClasses: Record<IconColor, string> = {
      primary: "text-brand-green",
      secondary: "text-brand-tech-green",
      default: "",
    };

    const sizeClasses: Record<IconSize, string> = {
      lg: "text-xl",
      md: "text-lg",
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    };

    if (!MuiIconComponent) return null;

    const combinedClassName = `
      inline-block leading-none
      ${colorClasses[color]}
      ${sizeClasses[size]}
      ${props.onClick ? "cursor-pointer" : ""}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <span
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        <MuiIconComponent fontSize="inherit" />
      </span>
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
