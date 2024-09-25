import { getCV } from "@/service/apiUserCV";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export default function useCV() {
  const { user } = useUser();
  const { data: cv, isLoading: isLoadingCV } = useQuery({
    queryFn: () => getCV(user.primaryEmailAddress.emailAddress),
    queryKey: ["cv"],
  });
  return { cv, isLoadingCV };
}
