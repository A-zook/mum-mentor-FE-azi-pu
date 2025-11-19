import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: async (payload: VerifyEmailPayload) => {
      const { data } = await axios.post<VerifyEmailResponse>(
        `${API_BASE_URL}/auth/verify-email`,
        payload
      );
      return data;
    },
  });
};
