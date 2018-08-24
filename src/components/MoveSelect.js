import { connect } from 'react-redux';
import { doSelect } from '../action/actions';
import Preview from '../container/Preview';


const mapStateToProps = function (state) {
  return {
    index: state.index,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    func: () => dispatch(doSelect(mapStateToProps.index)),
  };
};

const MoveSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preview);

export default MoveSelect;
