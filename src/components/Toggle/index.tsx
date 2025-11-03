import React from "react";

import {
  ToggleContainer,
  ToggleLabel,
  ToggleSelector
} from "./styles";

const Toggle: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <ToggleContainer>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </ToggleContainer>
  )
};

export default Toggle;