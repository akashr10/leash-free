import { css } from 'styled-components';

export const breakpoints = (property, values = []) => {
	const breakpointProps = values.reduce((mediaQueries, value) => {
		const [screenBreakpoint, propertyBreakpoint] = [
			Object.keys(value)[0],
			Object.values(value)[0],
		];
		return (mediaQueries += `
    @media screen and (max-width: ${screenBreakpoint}) {
      ${property}: ${propertyBreakpoint};
    }
    `);
	}, '');
	return css([breakpointProps]);
};
