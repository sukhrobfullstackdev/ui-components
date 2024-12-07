import { useDisplayState } from '@hooks/useDisplayState';
import { Children, cloneElement, type PropsWithChildren, type ReactElement } from 'react';

type AnimationType = 'fade' | 'slide' | 'scale';

export interface AnimateProps extends PropsWithChildren {
  type?: AnimationType;
  duration?: number;
  timingFunction?: string;
  delay?: number;
  asChild?: boolean;
  show?: boolean;
  onHidden?: () => void;
  onShown?: () => void;
}

const DEFAULT_TIMING_FUNCTION = 'cubic-bezier(0.33, 1.33, 0.23, 1)';

const Animate = (props: AnimateProps) => {
  const {
    show = true,
    children,
    type = 'fade',
    duration = 300,
    timingFunction = DEFAULT_TIMING_FUNCTION,
    asChild,
    onHidden = () => {},
    onShown = () => {},
  } = props;
  const { displayed, onShow, onHide } = useDisplayState({
    animate: true,
    show,
    onHidden,
    onShown,
  });

  if (!displayed) {
    return null;
  }

  if (asChild) {
    return (
      <>
        {Children.map(children, child => {
          return cloneElement(child as ReactElement, {
            style: {
              animationFillMode: 'both',
              ...(show
                ? {
                    animationName: `${type}In`,
                    animationDuration: `${duration}ms`,
                    animationTimingFunction: timingFunction,
                  }
                : {
                    animationName: `${type}Out`,
                    animationDuration: `${duration}ms`,
                    animationTimingFunction: timingFunction,
                  }),
            },
            onAnimationEnd: show ? onShow : onHide,
          });
        })}
      </>
    );
  }

  return (
    <div
      style={{
        animationFillMode: 'both',
        ...(show
          ? {
              animationName: `${type}In`,
              animationDuration: `${duration}ms`,
              animationTimingFunction: timingFunction,
            }
          : {
              animationName: `${type}Out`,
              animationDuration: `${duration}ms`,
              animationTimingFunction: timingFunction,
            }),
      }}
      onAnimationEnd={show ? onShow : onHide}
    >
      {children}
    </div>
  );
};

export default Animate;
