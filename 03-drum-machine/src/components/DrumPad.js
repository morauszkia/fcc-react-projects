import React, { useState, useEffect } from 'react';

const DrumPad = (props) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={props.classes}
      id={props.keyCode}
      key={props.id}
      description={props.description}
      onClick={props.onClick}
    >
      <p>{props.id}</p>
      <audio
        src={props.power ? props.sound : '#'}
        className="clip"
        id={props.id}
      />{' '}
    </button>
  );
};

export default DrumPad;
