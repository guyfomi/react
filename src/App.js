import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import './styles/bootstrap.min.css';
import './styles/bootstrap-theme.min.css';
import './styles/font-awesome.min.css';
import styles from './styles/app.css';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Races from './pages/races';

var MainLayout = React.createClass({
  render() {
    return (
      	<div className={styles.this}>
	    	<Header />

	        <div className="main">
	        	{this.props.children}
	        </div>
	        
			<Footer />
		</div>
    )
  }
})

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={Home} />
					<Route path="races" component={Races} />
				</Route>
			</Router>
		)
	}
}

export default App