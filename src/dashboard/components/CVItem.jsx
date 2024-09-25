import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function CVItem({ cv }) {
  const { title, cvID } = cv;
  return (
    <Link to={`/dashboard/cv/${cvID}/edit`}>
      <div className="flex h-[280px] cursor-pointer items-center justify-center rounded-lg border bg-slate-50 p-14 transition-all hover:bg-slate-100 hover:shadow-md">
        <Notebook />
      </div>
      <h2 className="my-1 text-center">{title}</h2>
    </Link>
  );
}

export default CVItem;
