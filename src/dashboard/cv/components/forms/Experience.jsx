import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { CVContext } from "@/context/CVContext";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};
function Experience() {
  const [experienceList, setExperienceList] = useState([]);
  const { cvDetail, setCvDetail } = useContext(CVContext);

  function handleChange(i, e) {
    const newEntries = experienceList.slice();
    const { name, value } = e.target;
    newEntries[i][name] = value;
    setExperienceList(newEntries);
  }

  function addNewExperience() {
    setExperienceList([
      ...experienceList,
      {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        workSummery: "",
      },
    ]);
  }

  function removeExperience() {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  }

  function handleRichTextEditor(e, name, i) {
    const newEntries = experienceList.slice();
    newEntries[i][name] = e.target.value;
    setExperienceList(newEntries);
  }

  useEffect(() => {
    setCvDetail({
      ...cvDetail,
      experience: experienceList,
    });
  }, [experienceList]);

  return (
    <div>
      <div className="rounded-md p-5 shadow-md">
        <h2 className="text-lg font-bold">Experience</h2>
        <p>Add your experience</p>
        <div>
          {experienceList.map((item, i) => (
            <div key={i}>
              <div className="my-5 grid grid-cols-2 gap-3 rounded-lg border p-3">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input name="title" onChange={(e) => handleChange(i, e)} />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(e) => handleChange(i, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input name="city" onChange={(e) => handleChange(i, e)} />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input name="state" onChange={(e) => handleChange(i, e)} />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(e) => handleChange(i, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(e) => handleChange(i, e)}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    index={i}
                    onRichTextEditorChange={(e) =>
                      handleRichTextEditor(e, "workSummery", i)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              className="hover:bg-slate-50"
              variant="outline"
              onClick={addNewExperience}
            >
              + Add New Experience
            </Button>
            <Button
              className="hover:bg-slate-50"
              variant="outline"
              onClick={removeExperience}
            >
              Remove
            </Button>
          </div>
          <Button className="text-white">Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
