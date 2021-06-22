import { css } from 'styled-components';

export const SCREEN_SIZES = {
	desktop: '1600px',
	desktopSmall: '1400px',
	laptop: '1200px',
	laptopSmall: '1000px',
	tablet: '855px',
	mobile: '600px',
};

export const COLORS = {
	primaryBlue: '#0F1C48',
	secondaryBlue: '#1889D0',
	grey: '#ECECF2',
	white: '#FFF',

	invertedgrey: '#D4D4DD',
	invertedprimaryBlue: '#162C77',
	invertedsecondaryBlue: '#2B7AAC',
};

export const FONT_SIZES = {
	small: '14px',
	medium: '16px',
	large: '28px',
	extraLarge: '86px',

	smallMScreen: '12px',
	mediumMScreen: '14px',
	largeMScreen: '20px',
	extraLargeMScreen: '60px',

	smallSScreen: '10px',
	mediumSScreen: '12px',
	largeSScreen: '20px',
	extraLargeSScreen: '48px',
};

export const SIZES = {
	size4: '4px',
	size8: '8px',
	size12: '12px',
	size16: '16px',
	size18: '18px',
	size20: '20px',
	size24: '24px',
	size28: '28px',
	size32: '32px',
	size36: '36px',
	size40: '40px',
	size48: '48px',
	size60: '60px',
	size72: '72px',
	size80: '80px',
	size100: '100px',
	size300: '300px',
};

export const FONTS = {
	titlePrimary: css`
		font-family: moret, serif;
		font-weight: 700;
		font-style: normal;
	`,
	titleSecondary: css`
		font-family: moret, serif;
		font-weight: 600;
		font-style: normal;
	`,
	contentPrimary: css`
		font-family: futura-pt, sans-serif;
		font-weight: 400;
		font-style: normal;
	`,
	contentSecondary: css`
		font-family: futura-pt-bold, sans-serif;
		font-weight: 700;
		font-style: normal;
	`,
};
