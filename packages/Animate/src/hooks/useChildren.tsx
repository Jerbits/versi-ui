import { Children, ReactNode, cloneElement, isValidElement, useEffect } from 'react';
import { animated, useSprings } from '@react-spring/web';
export const useChildren = () => {
	const updateDeepestChild = <T extends ReactNode | JSX.Element>(
		children: T,
		transformer?: (element: string) => ReactNode
	): T => {
		return Children.map(children, (child) => {
			if (!isValidElement(child) || !(child.props as any).children) {
				if (typeof child === 'string' && typeof transformer === 'function') {
					return transformer(child);
				}
				return child;
			}
			return cloneElement(child, {
				...child.props,
				children: updateDeepestChild(child.props.children, transformer)
			});
		}) as T;
	};
	const transformer = (element: string, flag: boolean) => {
		const CHARACTERS = element.split('');
		const to = (i: number) => ({
			y: 0,
			opacity: 1,
			delay: i * (100 - (i * 2))
		});
		const from = (i: number) => ({
			y: 50 * (i % 2 ? -1 : 1),
			opacity: 0
		});
		const [chars, setChars] = useSprings(CHARACTERS.length, (i) => ({
			from: from(i)
		}));
		useEffect(() => {
			if (!flag) {
				setChars((i) => ({
					...from(i)
				}));
			} else {
				setChars((i) => ({
					...to(i)
				}));
			}
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
	return { updateDeepestChild, transformer };
};
