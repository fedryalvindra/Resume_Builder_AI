import { Button } from "@/components/ui/button";
import { CVContext } from "@/context/CVContext";
import { toast } from "@/hooks/use-toast";
import { AIchatSession } from "@/service/aiModel";
import { useMutation } from "@tanstack/react-query";
import { RocketIcon } from "lucide-react";
import { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

const PROMPT =
  "position title: {positionTitle}, depends on position title give me 5-7 bullet points for my experience in resume, give me result with breakpoint";

function RichTextEditor({ onRichTextEditorChange, index }) {
  const { cvDetail, setCvDetail } = useContext(CVContext);
  const [value, setValue] = useState();

  const generateSummeryFromAI = async () => {
    if (!cvDetail.experience[index].title) {
      toast("Please Add Position Title");
      return;
    }
    const prompt = PROMPT.replace(
      "{positionTitle}",
      cvDetail?.experience[index].title,
    );
    const result = await AIchatSession.sendMessage(prompt);
    const resp = result.response.text();
    return resp;
  };

  const { mutate: generateAI, isPending: isLoadingAI } = useMutation({
    mutationFn: generateSummeryFromAI,
    onSuccess: (data) => {
      if (!data) toast({ title: "Please Add Position Title" });
      if (data) toast({ title: "Successfully Generate Experience" });
      setValue(data.replaceAll("[", "").replaceAll("]", ""));
    },
  });

  return (
    <div>
      <div className="my-2 flex justify-between">
        <label className="text-xs">Summery</label>
        <Button
          variant="outline"
          size="sm"
          className="flex gap-2 hover:bg-slate-50"
          onClick={generateAI}
          disabled={isLoadingAI}
        >
          <RocketIcon /> Generate from AI
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
          disabled={isLoadingAI}
        ></Editor>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
        </Toolbar>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
