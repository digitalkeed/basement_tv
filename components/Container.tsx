export function Container({ children, className = "", style, ...rest }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`container ${className}`.trim()} style={style} {...rest}>
      {children}
    </div>
  );
}
