import React from "react";

function Demo1() {
  console.log(`Demo1`, Demo1);
  return (
    <div>
      <h2> Hello</h2>
    </div>
  );
}
export default React.memo(Demo1);
