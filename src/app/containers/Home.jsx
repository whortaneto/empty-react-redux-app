import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import api from '../api';
import modules from '../modules';

const Home = ({ pushPage, requestApiCall }) => (
  <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
    <button onClick={() => pushPage('/about')} > push page</button>
    <button
      onClick={() => requestApiCall(
        api.callNames.TEST_API_CALL,
        { testArg: 1 },
        modules.connectivity.actions.CONNECTIVITY_SAMPLE_REQUEST
      )}
    >
      make simple api call
    </button>
  </div>
);

Home.propTypes = {
  pushPage: PropTypes.func.isRequired,
  requestApiCall: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {
  pushPage: push,
  requestApiCall: modules.connectivity.actions.requestApiCall
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pure(Home));
