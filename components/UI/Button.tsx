import React from "react";
import clsx from "clsx";
import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "rounded" | "solo";
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
    "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark rounded-md":
      variant === "primary" && !disabled,
    "bg-primary-extralight text-white rounded-md cursor-not-allowed":
      variant === "primary" && disabled,

    // outline

    "border-[1.5px] text-primary bg-transparent border-primary hover:border-primary-dark active:border-primary-dark  rounded-md":
      variant === "outline" && !disabled,
    "border-[1.5px] text-white bg-transparent border-primary-light  rounded-md cursor-not-allowed":
      variant === "outline" && disabled,

    "bg-transparent text-primary hover:text-primary-dark active:text-primary-dark":
      variant === "ghost" && !disabled,
    "bg-transparent text-primary-extraLight cursor-not-allowed":
      variant === "ghost" && disabled,

    //rounded
    "bg-primary h-[65.22px] w-[65.22px] text-white hover:bg-primary-dark active:bg-primary-dark rounded-[50%]":
      variant === "rounded" && !disabled,
    "bg-primary-extralight h-[65.22px] w-[65.22px] text-white rounded-[50%] cursor-not-allowed":
      variant === "rounded" && disabled,

    // solo
    "bg-primary h-14 w-14 text-white hover:bg-primary-dark active:bg-primary-dark rounded-[50%]":
      variant === "rounded" && !disabled,
  });

  const sizeClasses = clsx({
    "width-[88px] height-[36px] text-base": size === "small",
    "width-[88px] height-[48px] text-base": size === "medium",
    "width-[90px] height-[56px] text-base": size === "large",
  });
  return (
    <button
      className={clsx(
        sizeClasses,
        variantClasses,
        "flex items-center justify-center gap-2",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {withArrow && (
        <Image
          src="/assets/icons/arrow-right.svg"
          alt="arrow"
          width={24}
          height={24}
          className={arrowColorClass}
        />
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
