import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const joinWaitlist = async (payload: WaitlistPayload) => {
  const { data } = await axios.post<WaitlistResponse>(
    `${API_BASE_URL}/waitlist/join`,
    payload
  );
  return data;
};

export const useJoinWaitlist = () => {
  return useMutation({
    mutationFn: joinWaitlist,
    onSuccess: (data) => {
      toast.success(data.message || "Welcome to the waitlist!");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.error ||
          error.response?.data?.message ||
          "Failed to join waitlist";
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
