import { connect } from 'react-redux';
import Preview from '../container/Preview';

const mapStateToProps = function (index) {
  return { index };
};

const PreviewRadux = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Preview);

export default PreviewRadux;
