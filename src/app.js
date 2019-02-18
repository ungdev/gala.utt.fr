import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

import Home from './containers/home';
import Gallery from './containers/gallery';
import Partners from './containers/partners';
import Conditions from './containers/conditions';
import Access from './containers/access';
import Contact from './containers/contact';
import Legal from './containers/legal';
import PageNotFound from './containers/pageNotFound';

import './index.css';

const App = () => (
  <div id="app">
    <Router>
			<ScrollToTop>
				<Header />

				<div id="page">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/galerie" exact component={Gallery} />
						{/*<Route path="/partenaires" exact component={Partners} />*/}
						<Route path="/conditions-entree" exact component={Conditions} />
						<Route path="/acces" exact component={Access} />
						<Route path="/contact" exact component={Contact} />
						<Route path="/mentions-legales" exact component={Legal} />
						<Route component={PageNotFound} />
					</Switch>
				</div>

				<Footer />
			</ScrollToTop>
    </Router>
  </div>
);

export default App;