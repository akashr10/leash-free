import React from 'react';
import styled from 'styled-components';

export default function Image(props) {
	const { alt = '', className = '', src, ...rest } = props;

	return <StyledImage alt={alt} src={src} className={className} {...rest} />;
}

const StyledImage = styled.img`
	overflow: hidden;

	${({ forceSquare }) => forceSquare && `object-fit:cover`}
`;
