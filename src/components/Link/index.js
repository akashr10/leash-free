import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONTS, FONT_SIZES } from '../../utils/constants';

export default function LinkComponent(props) {
	const { className = '', ...rest } = props;

	return <StyledLink className={className} {...rest} />;
}

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${COLORS.primaryBlue};
	font-size: ${FONT_SIZES.small};
	${({ textUpper }) => textUpper && `text-transform: uppercase`};
	${FONTS.contentSecondary}
`;
