import { ReactNode } from 'react';
import { default as cn } from 'classnames';
import { useInView } from 'react-intersection-observer';
import { animationYCfg, AnimationConfigProps } from '../animations';
import { useChildren } from '@animate/hooks/useChildren';

export interface AnimateTextProps {
	children?: ReactNode | JSX.Element;
	classes?: string;
	animationFlag?: boolean;
	delay?: number;
	unmount?: boolean;
}

const RenderPropAnimation = (springConfig: AnimationConfigProps) => {
	const Component = ({ children, classes, animationFlag, delay = 0 }: AnimateTextProps) => {
		const { updateDeepestChild, transformer } = useChildren();
		const { ref, inView } = useInView({
			triggerOnce: true,
			threshold: 0
		});
		const classnames = cn(classes);

		if (!children) return <></>;
		return (
			<div ref={ref} className={classnames}>
				{updateDeepestChild(children, (element) => {
					return transformer({element, flag: animationFlag ?? inView, delay});
				})}
			</div>
		);
	};
	return Component;
};

const AnimateText = {
	Interlock: RenderPropAnimation(animationYCfg)
};

export default AnimateText;
