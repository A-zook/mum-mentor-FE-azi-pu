import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useResendVerification = () => {
  return useMutation({
    mutationFn: async (payload: ResendVerificationPayload) => {
      const { data } = await axios.post<ResendVerificationResponse>(
        `${API_BASE_URL}/auth/resend-verification`,
        payload
      );
      return data;
    },
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
};
