import { connect } from 'react-redux';
import Display from '../container/Display';

const mapStateToProps = function (index) {
  return { index };
};

const DisplayRadux = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Display);

export default DisplayRadux;
