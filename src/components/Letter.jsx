import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mantine/core";

function Letter(props) {
  const { color, i, j, startGuessing, letter, isClicked, isGameStarted } = props;

  const handleClick = () => {
    if (!isClicked) {
      startGuessing(letter, i, j);
    }
  };

  return (
    <Button color={isGameStarted ? color : "dark"} size="xl" onMouseDown={isGameStarted ? handleClick : ""}>
      {isGameStarted ? <>{letter}</> : <>?</>}
    </Button>
  );
}

Letter.propTypes = {
  color: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
  startGuessing: PropTypes.func.isRequired,
  letter: PropTypes.string.isRequired,
  isClicked: PropTypes.bool.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
};

export default Letter;
