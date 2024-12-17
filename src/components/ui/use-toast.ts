import { toast, ToastOptions } from "react-toastify";

export const useToast = () => {
  const showToast = (
    message: string,
    type: "info" | "success" | "warning" | "error" = "info",
    options?: ToastOptions
  ) => {
    toast[type](message, options);
  };

  return { showToast };
};
