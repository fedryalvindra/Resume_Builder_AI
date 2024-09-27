import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CVContext } from "@/context/CVContext";
import { useUpdateCV } from "@/dashboard/useUpdateCV";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";

function HardSkills() {
  const { cvDetail, setCvDetail } = useContext(CVContext);

  const [skillList, setSkillList] = useState(() =>
    cvDetail?.hardSkills
      ? cvDetail?.hardSkills
      : [
          {
            name: "",
          },
        ],
  );
  const { mutate, isPending } = useUpdateCV();

  const handleChange = (i, name, value) => {
    const newEntries = skillList.slice();
    newEntries[i][name] = value;
    setSkillList(newEntries);
  };

  const addNewSkill = () => {
    setSkillList([
      ...skillList,
      {
        name: "",
      },
    ]);
  };

  const removeSkill = () => {
    setSkillList((skillList) => skillList.slice(0, -1));
  };

  const onSave = () => {
    if (!skillList.length) return;
    let check = false;
    skillList.forEach((skill) => {
      if (!skill.name) check = true;
    });
    if (check) return;
    mutate(
      { hardSkills: skillList },
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
      hardSkills: skillList,
    });
  }, [skillList]);

  return (
    <div className="my-10 rounded-md border-t-2 border-slate-800 p-5 shadow-md">
      <h2 className="text-lg font-bold">Hard Skill</h2>
      <p>Add your hard skills</p>
      <div>
        {skillList?.map((skill, i) => (
          <div key={i} className="my-2">
            <label className="text-xs">Skill</label>
            <Input
              defaultValue={skill?.name}
              onChange={(e) => handleChange(i, "name", e.target.value)}
              disabled={isPending}
              autocomplete="off"
            />
          </div>
        ))}
        <div className="my-2 flex justify-between">
          <div className="flex gap-2">
            <Button
              className="hover:bg-slate-50"
              variant="outline"
              onClick={addNewSkill}
              disabled={isPending}
            >
              + Add New Skill
            </Button>
            <Button
              className="hover:bg-slate-50"
              variant="outline"
              onClick={removeSkill}
              disabled={isPending}
            >
              Remove
            </Button>
          </div>
          <Button className="text-white" onClick={onSave} disabled={isPending}>
            {isPending ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
