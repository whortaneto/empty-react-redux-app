import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import modules from './modules';
import PageContent from './components/PageContent';
import Home from './containers/Home';
import About from './containers/About';

const Routes = ({ location }) => (
  <PageContent>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </PageContent>
);

Routes.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  location: modules.routing.selectors.getLocation
});

export default connect(mapStateToProps)(Routes);
