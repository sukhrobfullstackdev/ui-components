import { forwardRef, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type PortalElement = React.ElementRef<'div'>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;

export interface PortalProps extends PrimitiveDivProps {
  container?: Element | null;
}

const Portal = forwardRef<PortalElement, PortalProps>((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => setMounted(true), []);

  const container = containerProp || (mounted && globalThis?.document?.body);
  return container ? ReactDOM.createPortal(<div {...portalProps} ref={forwardedRef} />, container) : null;
});

Portal.displayName = 'Portal';

export default Portal;
