import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTS, FONT_SIZES, SIZES } from '../../utils/constants';

export default function Button({
	className = '',
	children,
	color = 'grey',
	...rest
}) {
	return (
		<StyledButton className={className} color={color} {...rest}>
			{children}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	${FONTS.contentSecondary}
	${({ textUpper }) => textUpper && `text-transform: uppercase`};
	border-radius: ${SIZES.size48};
	font-size: ${FONT_SIZES.small};
	background-color: ${({ color }) => COLORS[color]};
	color: ${({ color }) => {
		switch (color) {
			case 'grey':
				return COLORS.primaryBlue;
			default:
				return COLORS.white;
		}
	}};
	border: none;
	padding: ${SIZES.size8} ${SIZES.size24};
	width: ${({ stretched }) => stretched && `100%`};

	:hover {
		background-color: ${({ color }) => COLORS[`inverted${color}`]};
	}
`;
