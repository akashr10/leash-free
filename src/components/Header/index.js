import React, { useState } from 'react';
import styled from 'styled-components';

import Image from '../Image';
import { COLORS, SIZES, SCREEN_SIZES } from '../../utils/constants';
import { breakpoints } from '../../utils/breakpoints';

import menuIcon from '../../image/three-dots-vertical.svg';
import closeIcon from '../../image/x.svg';
import IconLogo from '../IconLogo';
import Navigation from '../Navigation';

export default function Header(props) {
	const [menuToggle, setMenuToggle] = useState(false);

	const onMenuClick = () => {
		setMenuToggle(!menuToggle);
	};

	return (
		<HeaderContainer>
			<HeaderLeft>
				<StyledIconLogo />
			</HeaderLeft>
			<HeaderRight>
				<MenuImage
					alt="menu"
					onClick={onMenuClick}
					src={menuToggle ? closeIcon : menuIcon}
					forceSquare
				/>
				<Navigation menuToggle={menuToggle} userIconEnabled />
			</HeaderRight>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: ${SIZES.size72};
	margin-bottom: ${SIZES.size36};
	background: ${COLORS.white};
	position: sticky;
	top: 0;
	z-index: 4;

	padding: 0 ${SIZES.size100};

	@media (max-width: ${SCREEN_SIZES.laptop}) {
		padding: 0 ${SIZES.size24};
	}

	@media (max-width: ${SCREEN_SIZES.tablet}) {
		margin: 0;
		padding: 0;
	}

	${breakpoints('justify-content', [{ [SCREEN_SIZES.tablet]: 'center' }])}
	${breakpoints('margin-bottom', [{ [SCREEN_SIZES.tablet]: SIZES.size20 }])}
`;

const HeaderLeft = styled.div``;
const StyledIconLogo = styled(IconLogo)`
	cursor: pointer;
	width: ${SIZES.size36};
`;

const MenuImage = styled(Image)`
	display: none;
	position: fixed;
	top: ${SIZES.size16};
	right: ${SIZES.size8};
	z-index: 1;
	height: ${SIZES.size36};

	${breakpoints('display', [{ [SCREEN_SIZES.tablet]: 'block' }])}
`;

const HeaderRight = styled.div`
	display: flex;
`;
