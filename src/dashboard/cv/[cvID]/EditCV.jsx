import { useParams } from "react-router-dom";

function EditCV() {
  const { cvID } = useParams();

  return <div>Edit CV</div>;
}

export default EditCV;
