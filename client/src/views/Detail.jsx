import { useParams } from "react-router-dom";


const Detail = (props) => {
  let { identifier } = useParams()
  return (
    <div>
      <h1>Details page</h1>
    </div>

  );
}

export default Detail;