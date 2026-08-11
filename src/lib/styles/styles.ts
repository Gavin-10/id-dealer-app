
const roundedGlassBase = 'border border-white/15 shadow-2xs shadow-white/25';
export const roundedGlass = `glass-background ${roundedGlassBase}`;
export const darkRoundedGlass = `dark-glass-background ${roundedGlassBase}`;

const transitionBase = 'transition duration-300 ease-in-out';
export const transitionSizeSmall = `${transitionBase} md:hover:scale-103`;
export const transitionSizeLarge = `${transitionBase} md:hover:scale-110`;

export const flatGlassButton = `backdrop-blur-md ${transitionSizeLarge} hover:cursor-pointer p-3 rounded-md`;
export const roundedGlassButton = `${roundedGlass} ${transitionSizeLarge} hover:cursor-pointer px-5 py-3 rounded-md`;

export const smallTitle = 'font-normal text-4xl';
export const medTitle = 'text-center text-6xl font-semibold';
export const largeTitle = 'text-center text-9xl font-semibold';