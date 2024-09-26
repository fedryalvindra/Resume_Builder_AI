import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CVContext } from "@/context/CVContext";
import { useUpdateCV } from "@/dashboard/useUpdateCV";
import { useToast } from "@/hooks/use-toast";
import { AIchatSession } from "@/service/aiModel";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle, RocketIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const prompt = `Job Title: {jobTitle}, depends on job title give me summery for my cv within 4-5 lines in JSON format with field experience level and summery with experience level for fresher, mid-level, experienced with format {experience_level: {"fresher": your suggestion, "mid_level": your suggestion, "experienced": your suggestion}}`;

function UserSummary() {
  const { cvDetail, setCvDetail } = useContext(CVContext);

  const [summary, setSummary] = useState("");
  const [aiGeneratedList, setAiGeneratedList] = useState(null);
  const { mutate, isPending } = useUpdateCV();
  const { toast } = useToast();

  useEffect(() => {
    summary &&
      setCvDetail({
        ...cvDetail,
        summary: summary,
      });
  });

  const generateSummaryFromAI = async () => {
    const PROMPT = prompt.replace("{jobTitle}", cvDetail?.jobTitle);
    const result = await AIchatSession.sendMessage(PROMPT);
    return result;
  };

  const { mutate: generateAI, isPending: isLoadingAI } = useMutation({
    mutationFn: generateSummaryFromAI,
    onSuccess: (data) => {
      toast({ title: "Successfully generate summary" });
      console.log(data.response.text());
      setAiGeneratedList(JSON.parse(data.response.text()));
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutate(
      { summary },
      {
        onSuccess: () =>
          toast({
            title: "CV Updated",
            description: "Your Summary successfully updated",
          }),
      },
    );
  }

  return (
    <div>
      <div className="mt-10 rounded-lg p-5 shadow-md">
        <h2 className="text-lg font-bold">Your Summary</h2>
        <p>Generate your summary more effective using AI</p>
        <form className="mt-7" onSubmit={handleSubmit}>
          <div className="flex items-end justify-between">
            <label>Add Summary</label>
            <Button
              variant="outline"
              size="sm"
              className="flex gap-2 transition-all hover:bg-slate-50"
              onClick={generateAI}
              disabled={isLoadingAI}
            >
              <RocketIcon /> Generate from AI
            </Button>
          </div>
          <Textarea
            required
            className="mt-2 h-44"
            onChange={(e) => setSummary(e.target.value)}
            defaultValue={cvDetail?.summary}
            disabled={isLoadingAI}
          />
          <div className="mt-2 flex justify-end">
            <Button className="text-white" disabled={isPending}>
              {isPending ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedList && (
        <div className="mt-10 rounded-lg p-5 shadow-md space-y-2 border-t-4 border-slate-800">
          <h2 className="mt-2 text-lg font-bold">AI Suggestions</h2>
          <div className="flex flex-col gap-2">
            {/* {aiGeneratedList.map((item, i) => (
            <div key={i}>
            <h2>Level: {item.experience_level}</h2>
              <p>{item?.summary}</p>
              </div>
              ))} */}
            <div>
              <h2 className="font-semibold">Fresher</h2>
              <p>{aiGeneratedList?.experience_level?.["fresher"]}</p>
            </div>
            <div>
              <h2 className="font-semibold">Mid Level</h2>
              <p>{aiGeneratedList?.experience_level?.["mid_level"]}</p>
            </div>
            <div>
              <h2 className="font-semibold">Expert</h2>
              <p>{aiGeneratedList?.experience_level?.["experienced"]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSummary;
