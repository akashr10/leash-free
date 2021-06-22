import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZES, SCREEN_SIZES, SIZES } from '../../utils/constants';
import { breakpoints } from '../../utils/breakpoints';
import Link from '../Link';

import userDefault from '../../image/user-icon.svg';
import Image from '../Image';

export default function Navigation({
	menuToggle = false,
	userIconEnabled = false,
	linkColor = COLORS.primaryBlue,
}) {
	return (
		<StyledNavigation menuToggle={menuToggle}>
			<StyledLink to="/about" linkColor={linkColor} textUpper>
				About
			</StyledLink>
			<StyledLink to="/pricing" linkColor={linkColor} textUpper>
				Pricing
			</StyledLink>
			<StyledLink to="/contact" linkColor={linkColor} textUpper>
				Contact
			</StyledLink>
			{userIconEnabled ? (
				<UserImage alt="user" src={userDefault} forceSquare />
			) : null}
		</StyledNavigation>
	);
}

const StyledNavigation = styled.nav`
	flex: 0.5;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > * {
		margin-left: ${SIZES.size28};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		position: fixed;
		z-index: 1;
		width: 100vw;
		height: calc(100vh - ${SIZES.size72});
		top: ${SIZES.size72};
		left: 0;
		background-color: ${COLORS.primaryBlue};
		display: none;
		${(props) =>
			props.menuToggle &&
			`
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				overflow: hidden;
			`}

		& > * {
			margin: ${SIZES.size24} 0 0;
		}
	}
`;

const StyledLink = styled(Link)`
	color: ${({ linkColor }) => linkColor};

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		color: ${COLORS.white};
		margin: ${SIZES.size24} 0;
		font-size: ${FONT_SIZES.large};
	}
`;

const UserImage = styled(Image)`
	cursor: pointer;
	width: ${SIZES.size36};

	${breakpoints('width', [{ [SCREEN_SIZES.tablet]: SIZES.size60 }])}
`;
