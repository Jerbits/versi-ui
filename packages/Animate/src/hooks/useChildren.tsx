import { Children, ReactNode, isValidElement } from 'react';

const findDeepestChild = (children: ReactNode | JSX.Element) => {
	return Children.map(children, (child) => {
		if (!isValidElement(child) || !(child.props as any).children) {
			return child;
		}

		if ((child.props as any).children) {
			return findDeepestChild((child.props as any).children);
		}
	});
};

export const useChildren = (children: ReactNode | JSX.Element) => {
	const child = findDeepestChild(children);
	return { child };
};
