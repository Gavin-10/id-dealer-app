
const roundedGlassBase = 'border border-white/15 shadow-2xs shadow-white/25';
export const roundedGlass = `glass-background ${roundedGlassBase}`;
export const darkRoundedGlass = `dark-glass-background ${roundedGlassBase}`;

const transitionBase = 'transition duration-300 ease-in-out';
export const transitionSizeSmall = `${transitionBase} md:hover:scale-103`;
export const transitionSizeLarge = `${transitionBase} md:hover:scale-110`;

export const flatGlassButton = `backdrop-blur-md ${transitionSizeLarge} hover:cursor-pointer p-3 rounded-md backdrop-hue-rotate-30`;
export const roundedGlassButton = `${roundedGlass} ${transitionSizeLarge} hover:cursor-pointer px-5 py-3 rounded-md`;

export const smallTitle = 'font-normal text-4xl';
export const medTitle = 'text-center text-6xl font-semibold';
export const largeTitle = 'text-center text-7xl md:text-9xl font-semibold';

export const glassMenu = `rounded-md ${darkRoundedGlass} py-3 min-w-3xs`;
export const glassMenuItem = `p-3 transition duration-200 ease-in hover:bg-black/50 hover:cursor-pointer`;

const mediumGlassBase = `rounded-md backdrop-blur-md border border-gray-500/40 border-b-gray-300/40`;
export const mediumGlass = `${mediumGlassBase} glare`;
export const mediumGlassButton = `${mediumGlass} ${transitionSizeLarge} hover:cursor-pointer px-5 py-3 rounded-md`;
export const mediumAccentGlass = `rounded-md backdrop-blur-md border border-cyan-300/15 border-b-cyan-500/30 shadow-lg shadow-cyan-500/20 accent-glare`;
export const mediumAccentGlassButton = `${mediumAccentGlass} ${transitionSizeLarge} shadow- shadow-cyan-500 text-cyan-500 hover:cursor-pointer px-5 py-3 rounded-md`;

export const container = 'm-auto md:w-4/5 sm:w-full p-3';

const inputBase = "";
export const redInput = `${inputBase}`;
export const blueInput = `${inputBase}`;