import { Children, ReactNode, cloneElement, isValidElement } from 'react';
import ReactHtmlParser from 'react-html-parser';

export const useChildren = () => {
	const updateDeepestChild = <T extends ReactNode | JSX.Element>(
		children: T,
		transformer?: (element: string) => void
	): T => {
		return Children.map(children, (child) => {
			if (!isValidElement(child) || !(child.props as any).children) {
				if (typeof child === 'string' && typeof transformer === 'function') {
					return ReactHtmlParser(transformer(child));
				}
				return child
			}
			return cloneElement(child, {
				...child.props,
				children: updateDeepestChild(child.props.children, transformer)
			});
		}) as T;
	};
	return { updateDeepestChild };
};
