import { setErrorMessage, setFormData } from "src/features/Login/LoginService";
import type { HandleInputChange } from "lib/interfaces/LoginForm";

export const handleInputChange: HandleInputChange = (
  event,
  dispatch,
  formData
) => {
  const { id, value } = event.target;

  // Dynamically change form data
  dispatch(
    setFormData({
      ...formData,
      [id]: value,
    })
  );

  // Clear error message
  dispatch(setErrorMessage({ message: "" }));
};
