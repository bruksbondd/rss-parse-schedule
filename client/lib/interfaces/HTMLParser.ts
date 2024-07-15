import type { RefObject } from "react";

export type HTMLParserData = string;
export type RefObjectHTML = RefObject<HTMLElement>;
export type HTMLParserTag = string;
export type SelectInnerHTML = (
  ref: RefObjectHTML,
  data: HTMLParserData
) => void;

export interface HTMLParserProps {
  data: HTMLParserData;
  className: string;
  tag: HTMLParserTag;
}
export interface ContainerProps {
  ref: RefObjectHTML;
  className: string;
}
