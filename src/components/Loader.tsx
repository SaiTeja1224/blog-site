import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div className="h-[40vh] flex items-center justify-center">
      <FadeLoader color="gray" />
    </div>
  );
}

export default Loader;
