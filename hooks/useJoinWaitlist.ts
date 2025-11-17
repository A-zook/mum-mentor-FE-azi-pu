import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

interface WaitlistPayload {
  full_name: string;
  email: string;
}

interface WaitlistResponse {
  message: string;
}

const joinWaitlist = async (payload: WaitlistPayload) => {
  const { data } = await axios.post<WaitlistResponse>(
    "https://kaizen.emerj.net/api/v1/waitlist",
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
