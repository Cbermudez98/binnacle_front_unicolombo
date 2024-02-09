import { CSSProperties } from "react";
import { BounceLoader } from "react-spinners";

interface typeSpinner {
    speed?: number
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%"
};

const Spinner = ({ speed = 1 }: typeSpinner) => {
    return <BounceLoader cssOverride={override} color="#36d7b7" loading speedMultiplier={speed} />
};

export default Spinner;