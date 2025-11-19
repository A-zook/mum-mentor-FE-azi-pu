"use client";

import { motion, MotionProps } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "right",
      loading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-[#d62839] active:bg-[#c41e2b] shadow-sm",
      secondary:
        "bg-[#8B1538] text-white hover:bg-[#6d1029] active:bg-[#5a0d22] shadow-sm",
      outline:
        "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-[#d62839]",
      ghost:
        "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Icon Button Component
export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon: React.ReactNode;
  ariaLabel: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      ariaLabel,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-[#d62839] active:bg-[#c41e2b] shadow-md",
      secondary:
        "bg-[#8B1538] text-white hover:bg-[#6d1029] active:bg-[#5a0d22] shadow-md",
      outline:
        "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-[#d62839]",
      ghost:
        "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20",
    };

    const sizes = {
      sm: "h-8 w-8 text-sm",
      md: "h-12 w-12 text-base",
      lg: "h-16 w-16 text-lg",
    };

    return (
      // @ts-expect-error framer-motion types mismatch with button props
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        aria-label={ariaLabel}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {icon}
      </motion.button>
    );
  }
);

IconButton.displayName = "IconButton";

// Example usage component
export const ButtonShowcase = () => {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="mb-4 text-xl font-bold">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">
            Small Button
          </Button>
          <Button variant="primary" size="md">
            Medium Button
          </Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
          <Button
            variant="primary"
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            }
          >
            With Icon
          </Button>
          <Button variant="primary" loading>
            Loading
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Outline Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="sm">
            Small Button
          </Button>
          <Button variant="outline" size="md">
            Medium Button
          </Button>
          <Button variant="outline" size="lg">
            Large Button
          </Button>
          <Button
            variant="outline"
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            }
          >
            With Icon
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Icon Buttons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton
            variant="primary"
            size="sm"
            ariaLabel="Add"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
          />
          <IconButton
            variant="primary"
            size="md"
            ariaLabel="Microphone"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            }
          />
          <IconButton
            variant="secondary"
            size="md"
            ariaLabel="Microphone"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            }
          />
          <IconButton
            variant="outline"
            size="md"
            ariaLabel="Microphone"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Full Width</h3>
        <Button variant="primary" fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
  );
};

export default Button;
