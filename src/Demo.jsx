import React, { useMemo, useState } from "react";
import Demo1 from "./Demo1";

export default function Demo() {
  let [state, setState] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    setState(state + 1);
  }
  // const b = useMemo(() => [{}, {}], []);

  // function a() {}
  // const a = () => {};
  const a = useMemo(() => {
    return () => {};
  }, []);
  return (
    <div>
      <Demo1 a={a} />
      {state}
      <button onClick={handleClick}>Increase </button>
    </div>
  );
}
