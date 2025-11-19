import axios from "axios";

export const getVerificationTitle = (
  status: "loading" | "success" | "error"
): string => {
  const titles = {
    loading: "Verifying Your Email",
    success: "Email Verified!",
    error: "Verification Failed",
  };
  return titles[status];
};

export const parseVerificationError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Failed to verify email. Please try again."
    );
  }
  return "An unexpected error occurred. Please try again.";
};
