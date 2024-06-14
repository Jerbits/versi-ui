import { ReactNode } from 'react';
import { default as cn } from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useChildren } from '@animate/hooks/useChildren';
import { ITextAnimationConfig, useTransformer } from '@animate/hooks/useTransformer';

export interface AnimateTextProps {
	children?: ReactNode | JSX.Element;
	classes?: string;
	animationFlag?: boolean;
	delay?: number;
	unmount?: boolean;
}

const RenderPropAnimation = (springConfig: ITextAnimationConfig) => {
	const Component = ({ children, classes, animationFlag, delay = 0 }: AnimateTextProps) => {
		const { updateDeepestChild } = useChildren();
		const { applyTextffect } = useTransformer(springConfig);
		const { ref, inView } = useInView({
			triggerOnce: true,
			threshold: 0
		});
		const classnames = cn(classes);

		if (!children) return <></>;
		return (
			<div ref={ref} className={classnames}>
				{updateDeepestChild(children, (element) => {
					return applyTextffect({element, flag: animationFlag ?? inView, delay});
				})}
			</div>
		);
	};
	return Component;
};

const AnimateText = {
	Interlock: RenderPropAnimation({isInterlock: true, yAxisStart: 50}),
	ChainUp: RenderPropAnimation({isInterlock: false, yAxisStart: 50}),
	ChainDown: RenderPropAnimation({isInterlock: false, yAxisStart: -50})
};

export default AnimateText;
