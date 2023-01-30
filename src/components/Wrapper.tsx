import { PropsWithChildren } from "react";

interface WrapperProps {
  className?: string;
}

export default function Wrapper(props: PropsWithChildren<WrapperProps>) {
  return (
    <div className={`lg:mx-auto lg:max-w-7xl lg:px-0 w-full px-5 ${props.className}`}>
      {props.children}
    </div>
  );
}
