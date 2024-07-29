import { useCallback, useEffect } from 'react';
import { animated, useSprings } from '@react-spring/web';
import { EASING_DICTIONARY, TEasingDictionary } from '@animate/components/animations';

export interface ITextAnimationConfig {
	isInterlock: boolean;
	yAxisStart: number;
}

interface IApplyTextEffect {
	element: string;
	flag: boolean;
	delay?: number;
	duration: number;
	trail: number;
	easing: TEasingDictionary;
}

export const useTransformer = ({ isInterlock, yAxisStart }: ITextAnimationConfig) => {
	const applyTextffect = ({ element, flag, delay = 0, duration, trail, easing }: IApplyTextEffect) => {
		const CHARACTERS = element.split('');
		const to = useCallback(
			(i: number) => ({
				y: 0,
				opacity: 1,
				delay: i * (trail - i * 2)
			}),
			[]
		);
		const from = useCallback(
			(i: number) => ({
				y: isInterlock ? yAxisStart * (i % 2 ? -1 : 1) : yAxisStart,
				opacity: 0
			}),
			[yAxisStart, isInterlock]
		);
		const [chars, setChars] = useSprings(CHARACTERS.length, (i) => ({
			from: from(i),
			config: {
				duration,
				easing: EASING_DICTIONARY[easing]
			}
		}));
		useEffect(() => {
			let timeout: ReturnType<typeof setTimeout>;
			if (!flag) {
				setChars((i) => ({
					...from(i)
				}));
			} else {
				timeout = setTimeout(() => {
					setChars((i) => ({
						...to(i)
					}));
				}, delay);
			}
			return () => clearTimeout(timeout);
		}, [flag]);
		if (typeof element === 'string') {
			return chars.map(({ y, opacity }, i) => (
				<animated.span className='vui-inline-block' style={{ y, opacity }} key={i}>
					{CHARACTERS[i] === ' ' ? <>{'\u00A0'}</> : CHARACTERS[i]}
				</animated.span>
			));
		}
		return '';
	};
	return { applyTextffect };
};
