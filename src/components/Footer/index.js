import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZES, SCREEN_SIZES, SIZES } from '../../utils/constants';
import IconLogo from '../IconLogo';
import Navigation from '../Navigation';
import { breakpoints } from '../../utils/breakpoints';

export default function Footer(props) {
	return (
		<FooterContainer>
			<FooterLeft>
				<StyledIconLogo color={[COLORS.white]} />
				<FooterText>
					© Woof Woof Dog Parks, Inc. All rights reserved.
				</FooterText>
			</FooterLeft>

			<FooterRight>
				<Navigation linkColor={COLORS.white} />
			</FooterRight>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: ${SIZES.size100};
	background-color: ${COLORS.primaryBlue};
	padding: 0 ${SIZES.size72};

	@media (max-width: ${SCREEN_SIZES.desktopSmall}) {
		padding: 0 ${SIZES.size24};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		margin: 0;
		padding: 0 ${SIZES.size24};
		justify-content: center;
	}
`;

const FooterLeft = styled.div`
	display: flex;
	align-items: center;
`;

const FooterRight = styled.div`
	display: flex;
	align-items: center;
`;

const StyledIconLogo = styled(IconLogo)`
	cursor: pointer;
	width: ${SIZES.size36};

	${breakpoints('width', [{ [SCREEN_SIZES.tablet]: SIZES.size20 }])}
`;

const FooterText = styled.span`
	color: ${COLORS.white};
	font-size: ${FONT_SIZES.small};
	margin-left: ${SIZES.size12};

	${breakpoints('font-size', [
		{ [SCREEN_SIZES.tablet]: FONT_SIZES.smallSScreen },
	])}
`;
