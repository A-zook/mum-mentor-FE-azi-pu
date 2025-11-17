import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "rounded" | "solo" | "square";
  size?: "small" | "medium" | "large";
  withArrow?: boolean;
  arrowColor?: string;
}
const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  withArrow = false,
  className,
  ...props
}: ButtonProps) => {
  const arrowColorClass = clsx({
    // Primary
    "text-white ": variant === "primary" && !disabled,
    "text-white/50": variant === "primary" && disabled,
    // Outline
    "text-primary hover:text-primaryDark active:text-primaryDark":
      variant === "outline" && !disabled,
    "text-primary-light": variant === "outline" && disabled,
    // Ghost
    "text-primary": variant === "ghost" && !disabled,
    "text-primary-extraLight": variant === "ghost" && disabled,
  });

  const variantClasses = clsx({
    "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark rounded-sm":
      variant === "primary" && !disabled,
    "bg-primary-extralight text-white rounded-md cursor-not-allowed rounded0sm":
      variant === "primary" && disabled,

    // outline

    "border-[1.5px] text-primary bg-transparent border-primary hover:border-primary-dark active:border-primary-dark  rounded-sm":
      variant === "outline" && !disabled,
    "border-[1.5px] text-white bg-transparent border-primary-light text-primary-light  rounded-md cursor-not-allowed rounded-md":
      variant === "outline" && disabled,

    "bg-transparent text-primary hover:text-primary-dark active:text-primary-dark ":
      variant === "ghost" && !disabled,
    "bg-transparent text-primary-extraLight cursor-not-allowed":
      variant === "ghost" && disabled,

    //rounded
    "bg-primary h-[65.22px] w-[65.22px] text-white hover:bg-primary-dark active:bg-primary-dark rounded-[50%]":
      variant === "rounded" && !disabled,
    "bg-primary-extralight h-[65.22px] w-[65.22px] text-white rounded-[50%] cursor-not-allowed":
      variant === "rounded" && disabled,

    // solo
    "bg-primary h-[56px] w-[56px] p-[27.17] text-white hover:bg-primary-dark active:bg-primary-dark rounded-[50%]":
      variant === "rounded" && !disabled,

    // square
    "bg-primary h-[56px] w-[56px] p-4 w-fit text-white hover:bg-primary-dark active:bg-primary-dark rounded-lg":
      variant === "square" && !disabled,
  });

  const sizeClasses = clsx({
    "w-[88px] h-[36px] text-base px-4 py-2 ": size === "small",
    "w-[139px] h-[36px] text-base px-4 py-2 ": size === "small" && withArrow,
    "w-[88px] h-[48px] text-base  py-2 px-4": size === "medium",
    "w-[139px] h-[48px] py-2 px-4 w-fit text-base":
      size === "medium" && withArrow,
    "w-[90px] h-[56px] text-base": size === "large",
    "w-[139px] h-[56px] text-base py-4 px-6 w-fit":
      size === "large" && withArrow,
  });
  return (
    <button
      className={clsx(
        sizeClasses,
        variantClasses,
        "flex items-center justify-center gap-4",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {withArrow && (
        // <Image
        //   src="/assets/icons/arrow-right.svg"
        //   alt="arrow"
        //   width={24}
        //   height={24}
        //   className={arrowColorClass}
        // />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("w-6 h-6", arrowColorClass)}
          fill="currentColor"
        >
          <path
            d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
            fill="currentColor"
          />
          <path
            d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
