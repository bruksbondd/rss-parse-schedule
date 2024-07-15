import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { useRouter } from "next/router";
import InputForm from "src/components/LoginForm/InputForm";
import { validateAndSubmitForm } from "lib/auth/validateAndSubmitForm";
import ErrorMessage from "src/components/ErrorMessage/ErrorMessage";
import type { FC } from "react";

// Login Form
const LoginForm: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.loginForm.formData);
  const errorMessage = useSelector(
    (state: RootState) => state.loginForm.errorMessage
  );

  return (
    <div className="flex align-items-center justify-content-center w-full mb-8">
      <div className="surface-card p-7 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        </div>

        <div>
          <InputForm title="Username" inputType="text" />

          <InputForm title="Password" inputType="password" />

          <Button
            onClick={() => validateAndSubmitForm(formData, router, dispatch)}
            label="Sign In"
            icon="pi pi-user"
            className="w-full mb-3 p-ripple"
          />
          <ErrorMessage
            error={errorMessage.message}
            errorText={errorMessage.message}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
