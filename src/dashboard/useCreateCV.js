import { createCV } from "@/service/apiUserCV";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateCV() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createCV,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cv"],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { mutate, isPending };
}
