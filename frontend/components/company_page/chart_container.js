import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Chart from './chart';
import selectCurrentCompany from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => {
  return {
    user: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Chart)
);