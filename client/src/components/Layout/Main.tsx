import type { FC } from "react";
import type { MainInterface } from "lib/interfaces/Main";

// Standart main styling
const Main: FC<MainInterface> = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

export default Main;
