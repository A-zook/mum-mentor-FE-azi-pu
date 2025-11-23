import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ContactFormData } from "@/lib/validations/contact";
import { toast } from "sonner";

interface ContactResponse {
  success: boolean;
  message: string;
}

const sendContactForm = async (
  data: ContactFormData
): Promise<ContactResponse> => {
  const response = await axios.post("/api/contact", data);
  return response.data;
};

export function useContact() {
  return useMutation({
    mutationFn: sendContactForm,
    onSuccess: (data) => {
      toast.success(data.message || "Verification email sent successfully!");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.error ||
          error.response?.data?.message ||
          "Failed to resend verification email";
        toast.error("Something went wrong", {
          description: message,
        });
      } else {
        toast.error("Something went wrong", {
          description: "Please try again later.",
        });
      }
    },
  });
}
