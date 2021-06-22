import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

import parkMap from '../../image/park-map.svg';
import Button from '../Button';
import ParkCard from '../ParkCard';

import {
	COLORS,
	FONTS,
	FONT_SIZES,
	SIZES,
	SCREEN_SIZES,
} from '../../utils/constants';
import { breakpoints } from '../../utils/breakpoints';
import { parkData } from '../../utils/parkData';

export default function ParkSearchPage(props) {
	const { dog_parks: dogParks } = parkData;
	return (
		<SearchContainer>
			<SearchHeader>
				<SearchHeaderText>Find a local dog parks in</SearchHeaderText>
				<SearchHeaderLocation>Toronto, Ontario</SearchHeaderLocation>
				<SearchFilters>
					<Button>Riverdale</Button>
					<Button>Leslieville</Button>
					<Button>Rosedale</Button>
					<Button>The Beaches</Button>
				</SearchFilters>
			</SearchHeader>
			<SearchContent>
				<SearchContainerLeft>
					<SearchResults>
						{dogParks.map((dogPark, idx) => (
							<ParkCard key={`dogPark-${idx}`} {...dogPark} />
						))}
					</SearchResults>
				</SearchContainerLeft>
				<SearchContainerRight>
					<SearchMap src={parkMap} forceSquare />
				</SearchContainerRight>
			</SearchContent>
		</SearchContainer>
	);
}

const SearchContainer = styled.div``;

const SearchHeader = styled.div`
	display: flex;
	flex-flow: column;
	${breakpoints('align-items', [{ [SCREEN_SIZES.tablet]: 'center' }])}
`;
const SearchHeaderText = styled.span`
	color: ${COLORS.secondaryBlue};
	font-size: ${FONT_SIZES.large};
	${FONTS.titleSecondary};

	${breakpoints('font-size', [
		{ [SCREEN_SIZES.laptopSmall]: FONT_SIZES.largeMScreen },
		{ [SCREEN_SIZES.tablet]: FONT_SIZES.largeMScreen },
		{ [SCREEN_SIZES.mobile]: FONT_SIZES.largeSScreen },
	])}
`;
const SearchHeaderLocation = styled.span`
	color: ${COLORS.primaryBlue};
	font-size: ${FONT_SIZES.extraLarge};
	${FONTS.titlePrimary};

	${breakpoints('text-align', [{ [SCREEN_SIZES.tablet]: 'center' }])}
	${breakpoints('font-size', [
		{ [SCREEN_SIZES.laptopSmall]: FONT_SIZES.extraLargeMScreen },
		{ [SCREEN_SIZES.tablet]: FONT_SIZES.extraLargeMScreen },
		{ [SCREEN_SIZES.mobile]: FONT_SIZES.extraLargeSScreen },
	])}
`;
const SearchFilters = styled.div`
	margin: ${SIZES.size20} 0;

	& > Button {
		margin-right: ${SIZES.size8};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		white-space: nowrap;
		width: calc(100vw - ${SIZES.size48});
		overflow: scroll;
		text-align: center;
		-webkit-overflow-scrolling: touch;
	}
`;

const SearchContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${SIZES.size60};

	${breakpoints('margin-top', [{ [SCREEN_SIZES.tablet]: SIZES.size40 }])}
`;

const SearchContainerLeft = styled.div`
	flex: 0.6;
	${breakpoints('flex', [{ [SCREEN_SIZES.laptop]: '0.7' }])}
	${breakpoints('flex', [{ [SCREEN_SIZES.tablet]: '1' }])}
`;
const SearchResults = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-around;
	margin-left: -${SIZES.size36};

	@media (max-width: ${SCREEN_SIZES.laptop}) {
		margin-left: -${SIZES.size24};
	}

	@media (max-width: ${SCREEN_SIZES.laptopSmall}) {
		margin-left: -${SIZES.size16};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		margin: 0;
	}

	${breakpoints('justify-content', [{ [SCREEN_SIZES.tablet]: 'center' }])}
`;

const SearchContainerRight = styled.div`
	flex: 0.4;
	${breakpoints('flex', [{ [SCREEN_SIZES.laptop]: '0.3' }])}
	${breakpoints('display', [{ [SCREEN_SIZES.tablet]: 'none' }])}
`;
const SearchMap = styled(Image)`
	width: 100%;
	border-radius: ${SIZES.size12};
	position: sticky;
	top: ${SIZES.size100};
	padding-left: ${SIZES.size36};

	${breakpoints('padding-left', [{ [SCREEN_SIZES.laptop]: SIZES.size24 }])}
	${breakpoints('padding-left', [{ [SCREEN_SIZES.laptopSmall]: SIZES.size16 }])}
`;
