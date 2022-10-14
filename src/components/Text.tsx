import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChield?: boolean;
  className?: string;
}

export function Text({
  children,
  asChield,
  className,
  size = "md",
}: TextProps) {
  const Comp = asChield ? Slot : "span";
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-mg": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
