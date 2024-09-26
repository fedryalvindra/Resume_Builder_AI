import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CVContext } from "@/context/CVContext";
import { useUpdateCV } from "@/dashboard/useUpdateCV";
import { useToast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";

function UserInfo({ enableNext }) {
  const { cvDetail, setCvDetail } = useContext(CVContext);
  const [formData, setFormData] = useState();
  const { mutate, isPending } = useUpdateCV();
  const { toast } = useToast();

  function handleInputChange(e) {
    enableNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setCvDetail({
      ...cvDetail,
      [name]: value,
    });
  }

  function onSave(e) {
    e.preventDefault();
    enableNext(true);
    mutate(formData, {
      onSuccess: () =>
        toast({
          title: "CV Updated",
          description: "Your information successfully updated",
        }),
    });
  }

  return (
    <div className="mt-10 rounded-lg p-5 shadow-md border-t-2 border-slate-800">
      <h2 className="text-lg font-bold">Your Information</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={cvDetail?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input name="lastName" defaultValue={cvDetail?.lastName} required onChange={handleInputChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input name="jobTitle" defaultValue={cvDetail?.jobTitle} required onChange={handleInputChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input name="address" defaultValue={cvDetail?.address} required onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input name="phone" defaultValue={cvDetail?.phone} required onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input name="email" defaultValue={cvDetail?.email} required onChange={handleInputChange} />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" className="text-white" disabled={isPending}>
            {isPending ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
