import { RotateLoader } from "react-spinners";
import "./Spinner.css";

type Props = {
  isLoading?: boolean;
};

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading-spinner">
        <RotateLoader
          color={"#9333ea"}
          loading={isLoading}
          size={15}
          aria-label="loading spinner"
          data-testid="loading-spinner"
        />
      </div>
    </>
  );
};

export default Spinner;
