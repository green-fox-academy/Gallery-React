import { connect } from 'react-redux';
import { doLeft } from '../action/actions';
import Button from '../container/Button';


const mapStateToProps = function (state) {
  return {
    index: state.index,
    name: '<',
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    func: () => dispatch(doLeft(1)),
  };
};

const MoveLeft = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default MoveLeft;
