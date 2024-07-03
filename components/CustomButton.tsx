"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  type,
  textStyles,
  rightIcon
}: {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit",
  textStyles?: string,
  rightIcon?: string,
  isDisables?: boolean
}) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
