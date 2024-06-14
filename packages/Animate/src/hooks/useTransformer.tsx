import { useEffect } from 'react';
import { animated, useSprings } from '@react-spring/web';

export interface ITextAnimationConfig {
    isInterlock: boolean,
    yAxisStart: number
}
export const useTransformer = ({ isInterlock, yAxisStart }: ITextAnimationConfig) => {
	const applyTextffect = ({ element, flag, delay = 0 }: { element: string; flag: boolean; delay?: number }) => {
		const CHARACTERS = element.split('');
		const to = (i: number) => ({
			y: 0,
			opacity: 1,
			delay: i * (100 - i * 2)
		});
		const from = (i: number) => ({
			y: isInterlock ? yAxisStart * (i % 2 ? -1 : 1) : yAxisStart,
			opacity: 0
		});
		const [chars, setChars] = useSprings(CHARACTERS.length, (i) => ({
			from: from(i)
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
