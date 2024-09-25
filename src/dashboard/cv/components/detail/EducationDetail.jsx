function EducationDetail({ cvDetail }) {
  return (
    <div className="my-6">
      <h2 className="mb-2 text-center text-sm font-bold">Education</h2>
      <hr />
      {cvDetail?.education.map((edu) => (
        <div key={edu?.id} className="my-5">
          <h2 className="text-sm font-bold">{edu?.universityName}</h2>
          <h2 className="flex justify-between text-xs">
            {edu?.degree} in {edu?.major}
            <span>
              {edu?.startDate} - {edu?.endDate}
            </span>
          </h2>
          <p className="my-2 text-xs">{edu?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationDetail;
