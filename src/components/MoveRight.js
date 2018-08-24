import { connect } from 'react-redux';
import { doRight } from '../action/actions';
import Button from '../container/Button';


const mapStateToProps = function (state) {
  return {
    index: state.index,
    name: '>',
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    func: () => dispatch(doRight(1)),
  };
};

const MoveRight = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default MoveRight;
