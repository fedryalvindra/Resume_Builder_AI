import { Button } from "@/components/ui/button";
import { Notebook, Trash } from "lucide-react";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useDeleteCV } from "../useDeleteCV";

function CVItem({ cv }) {
  const { title, cvID } = cv;
  const [openAlert, setOpenAlert] = useState(false);
  const { mutate, isPending } = useDeleteCV();

  function handleDelete() {
    mutate(cvID);
  }
  return (
    <div className="rounded-lg border">
      <Link to={`/dashboard/cv/${cvID}/edit`}>
        <div className="flex h-[280px] cursor-pointer items-center justify-center p-14 transition-all hover:bg-slate-50 hover:shadow-md">
          <Notebook />
        </div>
      </Link>
      <div className="flex items-center justify-between bg-slate-50 px-2 py-2">
        <h2 className="my-1 text-center text-xs sm:text-sm">{title}</h2>
        <Button onClick={() => setOpenAlert(true)}>
          <Trash />
        </Button>
      </div>
      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default CVItem;
