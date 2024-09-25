function UserDetail({ cvDetail }) {
  return (
    <div>
      <h2 className="text-center text-xl font-bold">
        {cvDetail?.firstName} {cvDetail?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">{cvDetail?.jobTitle}</h2>
      <h2 className="text-center font-normal text-xs">{cvDetail?.address}</h2>

      <div className="flex justify-between">
        <h2 className="font-normal text-xs">{cvDetail?.phone}</h2>
        <h2 className="font-normal text-xs">{cvDetail?.email}</h2>
      </div>
      <hr className="border-[1.px] my-2"/>
    </div>
  );
}

export default UserDetail;
