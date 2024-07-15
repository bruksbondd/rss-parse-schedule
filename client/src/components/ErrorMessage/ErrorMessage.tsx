import { Message } from "primereact/message";
import { ErrorMessageProps } from "lib/interfaces/ErrorMessage";
import { memo } from "react";
import type { FC } from "react";

const ErrorMessage: FC<ErrorMessageProps> = ({ error, errorText, className }) =>
  error && <Message className={className} severity="error" text={errorText} />;

export default memo(ErrorMessage);
