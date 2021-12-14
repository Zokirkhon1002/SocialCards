import React from "react";
import "./PStyle.css"

function Phone({ number, type }) {
  return (
    <div className="phoneNumber">
      <p>
        {type}: {number}
      </p>
    </div>
  );
}

export default Phone;
