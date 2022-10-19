import React, { forwardRef } from "react";

function Child(props, ref) {
  // yha ye wale ref ko kuch bhi put kr sakte hai
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}
// forward ko hame yha ese use krna hota hai
export default forwardRef(Child);
