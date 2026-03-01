import React from "react";

type SafeZoneProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export function SafeZone({ children, className = "", as: Tag = "div", ...rest }: SafeZoneProps) {
  return (
    <Tag className={`container${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
