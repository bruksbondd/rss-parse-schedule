import type { ReactNode } from "react";

export type MainChildren = ReactNode;

export interface MainInterface {
  children: MainChildren;
  className?: string;
}
