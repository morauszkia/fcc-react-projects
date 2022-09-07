import React, { useState, useEffect } from 'react';

import DrumPad from './DrumPad';

const Keyboard = ({ data, active, onClick, power }) => {
  const drumPads = data.map((pad) => (
    <DrumPad
      key={pad.id}
      id={pad.id}
      classes={`drum-pad ${active === pad.keyCode && 'active'}`}
      keyCode={pad.keyCode}
      description={pad.description}
      sound={pad.audioUrl}
      power={power}
      onClick={onClick}
    />
  ));
  return <div className="drum-machine--pads">{drumPads}</div>;
};

export default Keyboard;
