import { ReactNode, useState } from 'react';
import { default as cn } from 'classnames';
import { animated, useSpring, useSprings } from '@react-spring/web';
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
	const Component = ({ children, classes, animationFlag, delay = 0, unmount = false }: AnimateTextProps) => {
		const { updateDeepestChild, transformer } = useChildren();
		const [isShow, setIsShow] = useState<boolean>(true);
		const { ref, inView } = useInView({
			triggerOnce: true,
			threshold: 0
		});
		const classnames = cn(classes, {
			'!vui-hidden': !isShow && unmount // hide the component with CSS versus un-mounting to prevent re-rendering of hooks
		});
		const animationStyles = useSpring({
			...springConfig(animationFlag ?? inView, delay, false),
			onStart: () => animationFlag && setIsShow(true),
			onRest: () => !animationFlag && setIsShow(false)
		});

		if (!children) return <></>;
		return (
			<div ref={ref} className={classnames}>
				{updateDeepestChild(children, (element) => {
					return transformer(element, animationFlag ?? inView);
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
