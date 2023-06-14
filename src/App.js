import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  color: white;
  background-color: #3f51b5;
  &:hover {
    background-color: #303f9f;
  }
`;

function App() {
  return (
    <div>
      <StyledButton variant="contained">Hello AI</StyledButton>
    </div>
  );
}

export default App;
