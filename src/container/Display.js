import React from 'react';
import PropTypes from 'prop-types';
import { imgs, discriptionTitle, discriptionContent } from '../dataSet';

function Display(props) {
  const imgStyle = {
    height: '450px',
    width: '800px',
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const discriptonStyle = {
    position: 'absolute',
    height: '150px',
    width: '100%',
    marginTop: '300px',
    backgroundColor: 'rgba(0, 0, 0, 50%)',
  };

  const pTitle = {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '25px',
  };

  const pStory = {
    color: 'lightgoldenrodyellow',
    fontSize: '15px',
  };

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={imgs[props.index]} alt="" />
      <div style={discriptonStyle}>
        {/* title */}
        <h3 style={pTitle}>
          {discriptionTitle[props.index]}
        </h3>
        {/* content */}
        <p style={pStory}>
          {discriptionContent[props.index]}
        </p>
      </div>
    </div>
  );
}

Display.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Display;
