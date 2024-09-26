import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CVContext } from "@/context/CVContext";
import { useUpdateCV } from "@/dashboard/useUpdateCV";
import { toast } from "@/hooks/use-toast";
import { useContext, useEffect, useState } from "react";

function Education() {
  const { cvDetail, setCvDetail } = useContext(CVContext);
  const [educationList, setEducationList] = useState(
    cvDetail?.education
      ? cvDetail?.education
      : [
          {
            universityName: "",
            startDate: "",
            endDate: "",
            degree: "",
            major: "",
          },
        ],
  );
  const { mutate, isPending } = useUpdateCV();

  const handleChange = (e, i) => {
    const newEntries = educationList.slice();
    const { name, value } = e.target;
    newEntries[i][name] = value;
    setEducationList(newEntries);
  };

  const addNewEducation = () => {
    setEducationList([
      ...educationList,
      {
        universityName: "",
        startDate: "",
        endDate: "",
        degree: "",
        major: "",
      },
    ]);
  };

  const removeEducation = () => {
    setEducationList((educationList) => educationList.slice(0, -1));
  };

  const onSave = () => {
    if (!educationList.length) return;
    let check = false;
    educationList.forEach((education) => {
      if (
        !education.universityName ||
        !education.startDate ||
        !education.degree ||
        !education.major
      )
        check = true;
    });

    if (check) return;
    mutate(
      { education: educationList },
      {
        onSuccess: () =>
          toast({
            title: "CV Updated",
            description: "Your information successfully updated",
          }),
      },
    );
  };

  useEffect(() => {
    setCvDetail({
      ...cvDetail,
      education: educationList,
    });
  }, [educationList]);

  return (
    <div className="my-10 rounded-md border-t-2 border-slate-800 p-5 shadow-md">
      <h2 className="text-lg font-bold">Education</h2>
      <p>Add your education</p>
      <div>
        {educationList?.map((item, i) => (
          <div key={i}>
            <div className="my-2 grid grid-cols-2 gap-3 rounded-lg border p-3">
              <div className="col-span-2">
                <label>University Name</label>
                <Input
                  name="universityName"
                  onChange={(e) => handleChange(e, i)}
                  disabled={isPending}
                  defaultValue={item?.universityName}
                />
              </div>
              <div>
                <label>Degree</label>
                <Input
                  name="degree"
                  onChange={(e) => handleChange(e, i)}
                  disabled={isPending}
                  defaultValue={item?.degree}
                />
              </div>
              <div>
                <label>Major</label>
                <Input
                  name="major"
                  onChange={(e) => handleChange(e, i)}
                  disabled={isPending}
                  defaultValue={item?.major}
                />
              </div>
              <div>
                <label>Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={(e) => handleChange(e, i)}
                  disabled={isPending}
                  defaultValue={item?.startDate}
                />
              </div>
              <div>
                <label>End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={(e) => handleChange(e, i)}
                  disabled={isPending}
                  defaultValue={item?.endDate}
                />
              </div>
              <div className="col-span-2">
                <label>Description</label>
                <Textarea
                  name="description"
                  onChange={(e) => handleChange(e, i)}
                  disabled={isPending}
                  defaultValue={item?.description}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="my-2 flex justify-between">
          <div className="flex gap-2">
            <Button
              className="hover:bg-slate-50"
              variant="outline"
              onClick={addNewEducation}
              disabled={isPending}
            >
              + Add New Education
            </Button>
            <Button
              className="hover:bg-slate-50"
              variant="outline"
              onClick={removeEducation}
              disabled={isPending}
            >
              Remove
            </Button>
          </div>
          <Button className="text-white" onClick={onSave} disabled={isPending}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Education;
