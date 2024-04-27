import { easings } from '@react-spring/web';

export type AnimationConfigProps = (flag: boolean, delay: number, isReverse: boolean) => {};
export const animationXCfg: AnimationConfigProps = (flag, delay = 0, isReverse = false) => ({
  opacity: flag ? 1 : 0,
  x: flag ? 0 : isReverse ? 50 : -50,
  delay,
  config: {
    duration: 200,
    easing: easings.easeOutCirc
  }
});
export const animationYCfg: AnimationConfigProps = (flag, delay = 0, isReverse = false) => ({
  opacity: flag ? 1 : 0,
  y: flag ? 0 : isReverse ? 20 : -20,
  delay,
  config: {
    duration: 500,
    easing: easings.easeOutCirc
  }
});

export const animationScaleCfg: AnimationConfigProps = (flag, delay = 0) => ({
  opacity: flag ? 1 : 0,
  transform: `scale(${flag ? 1 : 0})`,
  delay,
  config: {
    duration: 200,
    easing: easings.easeOutCirc
  }
});

export const animationOpacityCfg: AnimationConfigProps = (flag, delay = 0) => ({
  opacity: flag ? 1 : 0,
  delay,
  config: {
    duration: 300,
    easing: easings.easeOutCirc
  }
});
