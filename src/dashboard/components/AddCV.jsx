import { Loader2, PlusSquare } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateCV from "../useCreateCV";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddCV() {
  const { user } = useUser();
  const { mutate: createCV, isPending: isLoadingCV } = useCreateCV();
  const [openDialog, setOpenDialog] = useState(false);
  const [cvTitle, setCvTitle] = useState("");
  const navigate = useNavigate();

  const onCreate = () => {
    const uuid = uuidv4();
    createCV(
      {
        title: cvTitle,
        cvID: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
      },
      {
        onSuccess: (data) => {
          setOpenDialog(false);
          setCvTitle("");
          navigate(`/dashboard/cv/${data.cvID}/edit`);
        },
      },
    );
  };

  return (
    <div>
      <div
        className="flex h-[280px] cursor-pointer items-center justify-center rounded-lg border border-dashed bg-gray-200 p-14 py-24 transition-all hover:bg-gray-300 hover:shadow-md"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogTrigger>
          <button className="hidden">Open</button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Create new CV</DialogTitle>
            <DialogDescription>
              <p>CV Title</p>
              <Input
                className="mt-2"
                placeholder="Ex. Business Analyst"
                onChange={(e) => setCvTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                className="text-white"
                onClick={onCreate}
                disabled={!cvTitle || isLoadingCV}
              >
                {isLoadingCV ? <Loader2 /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddCV;
