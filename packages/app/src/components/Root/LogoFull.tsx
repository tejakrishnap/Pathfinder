import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 40,
    flexShrink: 0
  },
  circle: {
    stroke: '#CE375C',
  },
  needle: {
    fill: '#CE375C'
  },
  container: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  },
  text: {
    marginLeft: 4,
    fontWeight: 600,
    fontSize: 24,
    color: '#FFF'
  }
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" width="100%" height="100%">
      <path className={classes.circle} xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z">
      </path>
      <path className={classes.needle} xmlns="http://www.w3.org/2000/svg" d="m350.67 150.93-117.2 46.88a64 64 0 0 0-35.66 35.66l-46.88 117.2a8 8 0 0 0 10.4 10.4l117.2-46.88a64 64 0 0 0 35.66-35.66l46.88-117.2a8 8 0 0 0-10.4-10.4zM256 280a24 24 0 1 1 24-24 24 24 0 0 1-24 24z">
          <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="0 256 256; 15 256 256; 0 256 256; -15 256 256; 0 256 256;"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              dur="2s"
              repeatCount="indefinite"
          />
      </path>
    </svg>
    <span className={classes.text}>Pathfinder</span>
    </div>
  );
};

export default LogoFull;
