import { toast } from "@/hooks/use-toast";
import { deleteCV } from "@/service/apiUserCV";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCV() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteCV,
    onSuccess: () => {
      toast({
        title: "Successfully delete cv",
      });
      queryClient.invalidateQueries({
        queryKey: ["cv"],
      });
    },
  });
  return { mutate, isPending };
}
