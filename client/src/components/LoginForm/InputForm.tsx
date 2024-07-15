import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "src/app/store";
import type { FC } from "react";
import { InputFormProps } from "lib/interfaces/LoginForm";
import { handleInputChange } from "lib/auth/handleInputChange";

const InputForm: FC<InputFormProps> = ({ title, inputType }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.loginForm.formData);
  const errorMessage = useSelector(
    (state: RootState) => state.loginForm.errorMessage
  );
  return (
    <>
      <label
        htmlFor={title.toLowerCase()}
        className="block text-900 font-medium mb-2"
      >
        {title}
      </label>
      <InputText
        id={title.toLowerCase()}
        type={inputType}
        placeholder={`Enter ${title.toLowerCase()}`}
        className={
          errorMessage.message ? "w-full mb-3 p-invalid" : "w-full mb-3"
        }
        onChange={(event) => handleInputChange(event, dispatch, formData)}
      />
    </>
  );
};
export default InputForm;
