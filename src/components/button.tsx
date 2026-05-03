import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'transparent';

export type ButtonIconAlign = 'left' | 'right';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  icon,
  href,
  target,
  rel,
  className = '',
  children,
  ...props
}) => {
  let baseStyles = '';

  switch (variant) {
    case 'primary':
      baseStyles =
        'inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
      break;
    case 'secondary':
      baseStyles =
        'flex items-center justify-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-all text-sm md:text-base';
      break;
    case 'transparent':
      baseStyles =
        'group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 shadow-lg w-full sm:w-auto text-white font-semibold tracking-wide md:text-lg';
      break;
  }

  const combinedClassName = `${baseStyles} ${className}`.trim();

  const content = (
    <>
      {icon?.left}
      {children}
      {icon?.right}
    </>
  );

  if (href) {
    // Render as anchor if href is provided
    const { type, disabled, ...restProps } = props;
    return (
      <a href={href} className={combinedClassName} target={target} rel={rel} {...(restProps as any)}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;
