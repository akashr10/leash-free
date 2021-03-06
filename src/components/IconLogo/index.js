import React from 'react';
import { COLORS } from '../../utils/constants';

export default function IconLogo(props) {
	const { className = '', color = COLORS.primaryBlue } = props;

	return (
		<svg
			className={className}
			width="47.162"
			height="44.56"
			viewBox="0 0 47.162 44.56"
		>
			<g id="np_paw_1757912_000000" transform="translate(-2.488 -5.108)">
				<path
					id="Path_1373"
					data-name="Path 1373"
					d="M33.329,11.995c.82,4.393-1.292,8.474-4.715,9.113s-6.864-2.407-7.683-6.8,1.292-8.474,4.717-9.113,6.862,2.407,7.681,6.8"
					transform="translate(-9.196)"
					fill={color}
				/>
				<path
					id="Path_1374"
					data-name="Path 1374"
					d="M13.795,39.244c1.321,3.839-.025,7.782-3.007,8.808S4.317,46.8,3,42.962,3.02,35.182,6,34.156s6.471,1.251,7.792,5.088"
					transform="translate(0 -14.5)"
					fill={color}
				/>
				<path
					id="Path_1375"
					data-name="Path 1375"
					d="M61.364,5.207c3.424.638,5.536,4.717,4.717,9.113s-4.258,7.438-7.681,6.8-5.538-4.717-4.719-9.113,4.258-7.44,7.683-6.8"
					transform="translate(-25.684 -0.008)"
					fill={color}
				/>
				<path
					id="Path_1376"
					data-name="Path 1376"
					d="M81.973,34.2C84.956,35.224,86.3,39.167,84.979,43s-4.808,6.116-7.792,5.09-4.327-4.972-3.007-8.808,4.81-6.116,7.792-5.09"
					transform="translate(-35.838 -14.52)"
					fill={color}
				/>
				<path
					id="Path_1377"
					data-name="Path 1377"
					d="M47.048,56.124l-4.37-2.533a14.132,14.132,0,0,1-6.058-7.2l-1.788-4.768a4.667,4.667,0,0,0-8.74,0L24.3,46.391a14.143,14.143,0,0,1-6.058,7.2l-4.37,2.533a5.526,5.526,0,0,0-2.782,4.816,5.588,5.588,0,0,0,6.952,5.412,51.61,51.61,0,0,1,24.927,0,5.589,5.589,0,0,0,6.952-5.412,5.827,5.827,0,0,0-2.877-4.816Z"
					transform="translate(-4.333 -16.858)"
					fill={color}
				/>
			</g>
		</svg>
	);
}
