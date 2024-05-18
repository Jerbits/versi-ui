import { Children, ReactNode, cloneElement, isValidElement } from 'react';
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
	const transformer = (element: string) => {
		const CHARACTERS = element.split('');
		const to = (i: number) => ({
			y: 0,
			opacity: 1,
			delay: i * 150
		});
		const [chars, setChars] = useSprings(CHARACTERS.length, (i) => ({
			...to(i),
			from: {
				y: 50 * (i % 2 ? -1 : 1),
				opacity: 0
			}
		}));
		// setChars.start((i: number) => ({
		// 	...to(CHARACTERS.length - i),
		// 	y: 120,
		// 	opacity: 0
		// }));
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
