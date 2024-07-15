import { useEffect, useRef } from "react";
import type {
  ContainerProps,
  HTMLParserProps,
  SelectInnerHTML,
} from "lib/interfaces/HTMLParser";
import type { FC } from "react";

const HTMLParser: FC<HTMLParserProps> = ({ data, className, tag = "div" }) => {
  const Container = tag;
  const aRef = useRef<HTMLElement>(null);
  const selectInnerHTML: SelectInnerHTML = (ref, data) => {
    if (ref.current) {
      ref.current.innerHTML = data;
    }
  };
  useEffect(() => {
    selectInnerHTML(aRef, data);
  }, [data]);
  //@ts-ignore
  const containerProps: ContainerProps = {
    ref: aRef,
    className: className,
  };
  //@ts-ignore
  return <Container {...containerProps} />;
};

export { HTMLParser };
