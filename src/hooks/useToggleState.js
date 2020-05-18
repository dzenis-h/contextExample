import { useState } from "react";

const UseToggleState = (initialValue = false) => {
  const [state, toggleState] = useState(false);
  const toggle = () => toggleState(!state);

  return [state, toggle];
};

export default UseToggleState;
