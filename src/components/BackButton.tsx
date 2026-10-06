"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | undefined
    | null;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ variant, className, title, ...props }: Props) {
  const router = useRouter();

  return (
    <Button
      variant={variant}
      className={className}
      {...props}
      title={title}
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
    >
      {title}
    </Button>
  );
}
