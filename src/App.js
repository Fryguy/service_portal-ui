import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './Routes';
import './App.scss';
import PortalNav from './SmartComponents/ServicePortal/PortalNav';
import { Main } from '@red-hat-insights/insights-frontend-components';
import { NotificationsPortal } from '@red-hat-insights/insights-frontend-components/components/Notifications';
import { Grid, GridItem } from '@patternfly/react-core';
import '@red-hat-insights/insights-frontend-components/components/Notifications.css';

class App extends Component {

  componentDidMount () {
    insights.chrome.init();
    insights.chrome.identifyApp('service-portal');
  }

  componentWillUnmount () {
    this.appNav();
    this.buildNav();
  }

  render () {
    return (
      <React.Fragment>
        <NotificationsPortal />
        <Main style={ { marginLeft: 0, paddingLeft: 0, paddingTop: 0 } }>
          <Grid>
            <GridItem style={ { backgroundColor: '#FFFFFF' } } sm={ 4 } md={ 4 } lg={ 2 } xl={ 2 }>
              <PortalNav />
            </GridItem >
            <GridItem sm={ 8 } md={ 8 } lg={ 10 } xl={ 10 }>
              <Routes childProps={ this.props } />
            </GridItem>
          </Grid>
        </Main>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default withRouter (connect()(App));
