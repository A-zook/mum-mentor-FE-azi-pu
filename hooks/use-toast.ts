import { useState, useCallback } from "react";

type ToastType = "success" | "error";

interface Toast {
  show: boolean;
  message: string;
  type: ToastType;
}

export function useToast() {
  const [toast, setToast] = useState<Toast>({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      setToast({ show: true, message, type });

      // Auto-hide after 5 seconds
      setTimeout(() => {
        setToast({ show: false, message: "", type: "success" });
      }, 5000);
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast({ show: false, message: "", type: "success" });
  }, []);

  return { toast, showToast, hideToast };
}
