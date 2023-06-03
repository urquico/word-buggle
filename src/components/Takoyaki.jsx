import React, { useState } from "react";
import useSound from "use-sound";

import { IconMusic, IconMusicOff } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import takoyaki from "../../src/assets/takoyaki.mp3";

function Takoyaki({ isTakoyakiPlaying, setIsTakoyakiPlaying }) {
  const [playSound, { stop }] = useSound(takoyaki, { volume: 0.7, interrupt: false });

  return (
    <div>
      {isTakoyakiPlaying ? (
        <ActionIcon
          onClick={() => {
            stop();
            setIsTakoyakiPlaying(false);
          }}
        >
          <IconMusic size="1.125rem" />
        </ActionIcon>
      ) : (
        <ActionIcon
          onClick={() => {
            playSound();
            setIsTakoyakiPlaying(true);
          }}
        >
          <IconMusicOff size="1.125rem" />
        </ActionIcon>
      )}
    </div>
  );
}

export default Takoyaki;
