import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

import {
	SIZES,
	FONT_SIZES,
	FONTS,
	COLORS,
	SCREEN_SIZES,
} from '../../utils/constants';
import Button from '../Button';

export default function ParkCard(props) {
	const { name, location, description, image_url: imageUrl } = props;
	return (
		<StyledParkCard>
			<StyledImage alt="parkImage" src={imageUrl} forceSquare />
			<LocationButton color="secondaryBlue">{location}</LocationButton>
			<ParkContent>
				<Content>
					<ParkTitle>{name}</ParkTitle>
					<ParkDescription>{description}</ParkDescription>
				</Content>
				<ExploreButton color="primaryBlue" stretched textUpper>
					{`Explore ${name}`}
				</ExploreButton>
			</ParkContent>
		</StyledParkCard>
	);
}

const StyledParkCard = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column;
	overflow: hidden;
	border-radius: ${SIZES.size36};
	width: calc(50% - ${SIZES.size72});
	min-width: 250px;
	height: 450px;
	background-color: ${COLORS.grey};
	margin: 0 ${SIZES.size36} ${SIZES.size36};

	@media (max-width: ${SCREEN_SIZES.laptop}) {
		width: calc(50% - ${SIZES.size48});
		height: 450px;
		margin: 0 ${SIZES.size24} ${SIZES.size24};
	}

	@media (max-width: ${SCREEN_SIZES.laptopSmall}) {
		width: calc(50% - ${SIZES.size32});
		margin: 0 ${SIZES.size16} ${SIZES.size16};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		width: calc(50% - ${SIZES.size48});
		margin: ${SIZES.size24};
	}

	@media (max-width: ${SCREEN_SIZES.mobile}) {
		width: calc(100% - ${SIZES.size36});
		max-width: 320px;
		margin: ${SIZES.size36};
	}
`;

const StyledImage = styled(Image)`
	width: 100%;
`;

const LocationButton = styled(Button)`
	margin-top: -${SIZES.size16};
`;

const ParkContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: column nowrap;
	flex: 1;
	padding: ${SIZES.size20};
`;

const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	text-align: center;
`;

const ParkTitle = styled.span`
	${FONTS.titlePrimary}
	color: ${COLORS.primaryBlue};
	font-size: ${FONT_SIZES.large};
`;
const ParkDescription = styled.span`
	${FONTS.contentPrimary}
	color: ${COLORS.primaryBlue};
	font-size: ${FONT_SIZES.small};
	text-align: center;
	margin-top: ${SIZES.size12};

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ExploreButton = styled(Button)`
	align-self: flex-end;
`;
