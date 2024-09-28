import { dateFormat } from "@/helper/dateFormat";

function EducationDetail({ cvDetail }) {
  return (
    <div className="my-6">
      <h2 className="mb-2 text-center text-sm font-bold">Education</h2>
      <hr />
      {cvDetail?.education?.map((edu, i) => (
        <div key={i} className="my-5">
          <h2 className="text-sm font-bold">{edu?.universityName}</h2>
          <h2 className="flex justify-between text-xs">
            {edu?.degree} in {edu?.major}
            <span className="text-gray-500">
              <i>{dateFormat(edu?.startDate)}</i> -{" "}
              <i>
              {!edu?.endDate ? "Present" : `${dateFormat(edu?.endDate)}`}
              </i>
            </span>
          </h2>
          <p className="my-2 text-xs">{edu?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationDetail;
