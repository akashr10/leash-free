import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import ParkSearchPage from './components/ParkSearchPage';
import { SIZES, SCREEN_SIZES } from './utils/constants';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<AppContainer>
					<Header />
					<Switch>
						<Route path="/">
							<ParkSearchPage />
						</Route>
					</Switch>
				</AppContainer>
				<Footer />
			</Router>
		</>
	);
}

export default App;

const AppContainer = styled.div`
	display: flex;
	flex-flow: column;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	padding: 0 ${SIZES.size72};

	@media (max-width: ${SCREEN_SIZES.desktopSmall}) {
		padding: 0 ${SIZES.size24};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		margin: 0;
		padding: 0;
	}
`;
