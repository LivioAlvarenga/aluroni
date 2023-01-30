import { PropsWithChildren } from "react";

interface WrapperProps {
  className?: string;
}

export default function Wrapper(props: PropsWithChildren<WrapperProps>) {
  return (
    <div
      className={`w-full px-5 desktop_lg:mx-auto desktop_lg:max-w-7xl desktop_lg:px-0 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
