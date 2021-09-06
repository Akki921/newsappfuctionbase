import React from "react";
import loader from "./loader.gif";
function Spinner(props) {
  return (
    <div>
      <div className="text-center">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
}

export default Spinner;
