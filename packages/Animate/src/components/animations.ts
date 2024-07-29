import { easings } from '@react-spring/web';

export type TEasingDictionary = keyof typeof EASING_DICTIONARY;
export const EASING_DICTIONARY = {
	linear: easings.linear,
	easeInQuad: easings.easeInQuad,
	easeOutQuad: easings.easeOutQuad,
	easeInOutQuad: easings.easeInOutQuad,
	easeInCubic: easings.easeInCubic,
	easeOutCubic: easings.easeOutCubic,
	easeInOutCubic: easings.easeInOutCubic,
	easeInQuart: easings.easeInQuart,
	easeOutQuart: easings.easeOutQuart,
	easeInOutQuart: easings.easeInOutQuart,
	easeInQuint: easings.easeInQuint,
	easeOutQuint: easings.easeOutQuint,
	easeInOutQuint: easings.easeInOutQuint,
	easeInSine: easings.easeInSine,
	easeOutSine: easings.easeOutSine,
	easeInOutSine: easings.easeInOutSine,
	easeInExpo: easings.easeInExpo,
	easeOutExpo: easings.easeOutExpo,
	easeInOutExpo: easings.easeInOutExpo,
	easeInCirc: easings.easeInCirc,
	easeOutCirc: easings.easeOutCirc,
	easeInOutCirc: easings.easeInOutCirc,
	easeInBack: easings.easeInBack,
	easeOutBack: easings.easeOutBack,
	easeInOutBack: easings.easeInOutBack,
	easeInElastic: easings.easeInElastic,
	easeOutElastic: easings.easeOutElastic,
	easeInOutElastic: easings.easeInOutElastic,
	easeInBounce: easings.easeInBounce,
	easeOutBounce: easings.easeOutBounce,
	easeInOutBounce: easings.easeInOutBounce
};

export type AnimationConfigProps = (
	flag: boolean,
	delay: number,
	isReverse: boolean,
	easing: TEasingDictionary,
	duration?: number
) => {};
export const animationXCfg: AnimationConfigProps = (flag, delay = 0, isReverse = false, easing, duration = 200) => ({
	opacity: flag ? 1 : 0,
	x: flag ? 0 : isReverse ? 50 : -50,
	delay,
	config: {
		duration,
		easing: EASING_DICTIONARY[easing]
	}
});
export const animationYCfg: AnimationConfigProps = (flag, delay = 0, isReverse = false, easing, duration = 500) => ({
	opacity: flag ? 1 : 0,
	y: flag ? 0 : isReverse ? 20 : -20,
	delay,
	config: {
		duration: 500,
		easing: EASING_DICTIONARY[easing]
	}
});

export const animationScaleCfg: AnimationConfigProps = (
	flag,
	delay = 0,
	isReverse = false,
	easing,
	duration = 200
) => ({
	opacity: flag ? 1 : 0,
	transform: `scale(${flag ? 1 : 0})`,
	delay,
	config: {
		duration: 200,
		easing: EASING_DICTIONARY[easing]
	}
});

export const animationOpacityCfg: AnimationConfigProps = (
	flag,
	delay = 0,
	isReverse = false,
	easing,
	duration = 300
) => ({
	opacity: flag ? 1 : 0,
	delay,
	config: {
		duration: 300,
		easing: EASING_DICTIONARY[easing]
	}
});
