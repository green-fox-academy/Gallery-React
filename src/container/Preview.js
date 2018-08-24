import React from 'react';
// import PropTypes from 'prop-types';
import { imgs } from '../dataSet';
// import PropTypes from 'prop-types';

function Preview() {
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '80px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: '80px',
    mrginTop: '80px',
  };

  const imgStyle = {
    mrginTop: '80px',
    marginRight: '20px',
    height: '45px',
    width: '80px',
  };

  // const change = props => (props.index);

  const smallImgs = (input) => {
    const result = [];
    input.forEach((element) => {
      result.push(<img style={imgStyle} src={element} alt="" />);
    });
    return result;
  };

  return (
    <div style={divStyle}>
      { smallImgs(imgs) }
    </div>
  );
}

// Preview.propTypes = {
//   index: PropTypes.index.isRequired,
// };

export default Preview;
