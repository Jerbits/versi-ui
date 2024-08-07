import { ReactNode, useState } from 'react';
import { default as cn } from 'classnames';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import {
	animationXCfg,
	animationYCfg,
	AnimationConfigProps,
	animationOpacityCfg,
	animationScaleCfg,
  TEasingDictionary
} from '../animations';

export interface AnimateDirectionProps {
	children?: JSX.Element | ReactNode;
	classes?: string;
	animationFlag?: boolean;
	delay?: number;
	unmount?: boolean;
	duration?: number;
	easing?: TEasingDictionary;
}

const RenderPropAnimation = (springConfig: AnimationConfigProps, isReverse: boolean) => {
	const Component = ({
		children,
		classes,
		animationFlag,
		delay = 0,
		unmount = false,
		easing = 'easeOutCirc',
    duration
	}: AnimateDirectionProps) => {
		const [isShow, setIsShow] = useState<boolean>(true);
		const { ref, inView } = useInView({
			triggerOnce: true,
			threshold: 0
		});
		const classnames = cn(classes, {
			'!vui-hidden': !isShow && unmount // hide the component with CSS versus un-mounting to prevent re-rendering of hooks
		});
		const animationStyles = useSpring({
			...springConfig(animationFlag ?? inView, delay, isReverse, easing, duration),
			onStart: () => animationFlag && setIsShow(true),
			onRest: () => !animationFlag && setIsShow(false)
		});
		if (!children) return <></>;
		return (
			<animated.div ref={ref} className={classnames} style={animationStyles}>
				{children}
			</animated.div>
		);
	};
	return Component;
};

const AnimateDirection = {
	Left: RenderPropAnimation(animationXCfg, false),
	Right: RenderPropAnimation(animationXCfg, true),
	Up: RenderPropAnimation(animationYCfg, true),
	Down: RenderPropAnimation(animationYCfg, false),
	Opacity: RenderPropAnimation(animationOpacityCfg, false),
	Scale: RenderPropAnimation(animationScaleCfg, false)
};

export default AnimateDirection;
