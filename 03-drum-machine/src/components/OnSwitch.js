import React from 'react';

const OnSwitch = (props) => {
  return (
    <button
      className={`switch ${props.playing ? 'on' : ''}`}
      onClick={props.onActivate}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="power-icon"
        viewBox="0 0 512 512"
      >
        <title>Power</title>
        <path
          d="M378 108a191.41 191.41 0 0170 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0169-148M256 64v192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </button>
  );
};

export default OnSwitch;
