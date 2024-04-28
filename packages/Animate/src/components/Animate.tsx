import { ReactNode, useState } from 'react';
import { default as cn } from 'classnames';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import {
  animationXCfg,
  animationYCfg,
  AnimationConfigProps,
  animationOpacityCfg,
  animationScaleCfg
} from './animations';

export interface AnimateProps {
  children?: JSX.Element | ReactNode;
  classes?: string;
  animationFlag?: boolean;
  delay?: number;
  defaultView?: boolean;
}

const RenderPropAnimation = (springConfig: AnimationConfigProps, isReverse: boolean) => {
  const Component = ({ children, classes, animationFlag, delay = 0, defaultView = false }: AnimateProps) => {
    // completely remove the element when it does not start so it doesnt affect the z-index background elements
    const [isShow, setIsShow] = useState<boolean>(defaultView);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0
    });
    const classnames = cn(classes, {
      '!zp-hidden': !isShow // hide the component with CSS versus un-mounting to prevent re-rendering of hooks
    });
    const animationStyles = useSpring({
      ...springConfig(animationFlag ?? inView, delay, isReverse),
      onStart: () => animationFlag && setIsShow(true),
      onRest: () => !animationFlag && setIsShow(false)
    });
    if (!children) return <></>;
    return (
      <>
        <animated.div ref={ref} className={classnames} style={animationStyles}>
          {children}
        </animated.div>
      </>
    );
  };
  return Component;
};

export const Animate = {
  Left: RenderPropAnimation(animationXCfg, false),
  Right: RenderPropAnimation(animationXCfg, true),
  Up: RenderPropAnimation(animationYCfg, true),
  Down: RenderPropAnimation(animationYCfg, false),
  Opacity: RenderPropAnimation(animationOpacityCfg, false),
  Scale: RenderPropAnimation(animationScaleCfg, false)
};