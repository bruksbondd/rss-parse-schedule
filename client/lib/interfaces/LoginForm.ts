import type { ChangeEvent } from "react";
import type { NextRouter } from "next/router";
import type { Dispatch } from "@reduxjs/toolkit";

export type FormUsername = string;
export type FormPassword = string;
export type FormError = string;
export type InputFormTitle = string;
export type InputFormType = string;
export type HandleInputChange = (
  event: ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch,
  formData: FormData
) => void;
export type ValidateAndSubmitForm = (
  formData: FormData,
  router: NextRouter,
  dispatch: Dispatch
) => Promise<void>;

export interface FormData {
  username: FormUsername;
  password: FormPassword;
}

export interface ErrorData {
  message: FormError;
}

export interface FormState {
  formData: FormData;
  errorMessage: ErrorData;
}

export interface InputFormProps {
  title: InputFormTitle;
  inputType: InputFormType;
}
