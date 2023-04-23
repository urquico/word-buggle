import React, { useState } from "react";
import { Button } from "@mantine/core";

function Letter({
  color,
  i,
  j,
  startGuessing,
  stopGuessing,
  letter,
  isClicked,
}) {
  return (
    <Button
      color={color}
      size="xl"
      key={`${i}-${j}`}
      onMouseDown={() => {
        if (!isClicked) {
          startGuessing(letter, i, j);
        }
      }}
      onMouseUp={stopGuessing}
    >
      {letter}
    </Button>
  );
}

export default Letter;
