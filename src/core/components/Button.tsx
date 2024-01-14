import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

export default Button;
