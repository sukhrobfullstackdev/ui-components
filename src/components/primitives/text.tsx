import { text } from '@recipes/text';
import { css, cx } from '@styled/css';
import { CSSProperties, PropsWithChildren, forwardRef } from 'react';

export type TextStyles = {
  color?: CSSProperties['color'];
  fontWeight?: CSSProperties['fontWeight'];
  fontSize?: CSSProperties['fontSize'];
  lineHeight?: CSSProperties['lineHeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  textAlign?: CSSProperties['textAlign'];
  textDecoration?: CSSProperties['textDecoration'];
  textTransform?: CSSProperties['textTransform'];
  textWrap?: CSSProperties['textWrap'];
  maxWidth?: CSSProperties['maxWidth'];
};

export interface TextProps extends PropsWithChildren {
  styles?: TextStyles;
  scale?: boolean;
  fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  fontColor?: 'text.primary' | 'text.secondary' | 'text.tertiary' | 'text.quaternary';
}

export interface BodyProps extends TextProps {
  inline?: boolean;
  mono?: boolean;
  variant?: 'text' | 'error' | 'info' | 'success' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  truncate?: boolean;
}

const defaultColor = 'text.primary';

const TextH1 = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, styles = {}, scale, fontColor: color = defaultColor, ...props }, ref) => (
    <h1 ref={ref} className={css({ textStyle: scale ? 'h1-scaled' : 'h1', color, ...props })} style={styles}>
      {children}
    </h1>
  ),
);

const TextH2 = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, styles = {}, scale, fontColor: color = defaultColor, ...props }, ref) => (
    <h2 ref={ref} className={css({ textStyle: scale ? 'h2-scaled' : 'h2', color, ...props })} style={styles}>
      {children}
    </h2>
  ),
);

const TextH3 = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, styles = {}, scale, fontColor: color = defaultColor, ...props }, ref) => (
    <h3 ref={ref} className={css({ textStyle: scale ? 'h3-scaled' : 'h3', color, ...props })} style={styles}>
      {children}
    </h3>
  ),
);

const TextH4 = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, styles = {}, scale, fontColor: color = defaultColor, ...props }, ref) => (
    <h4 ref={ref} className={css({ textStyle: scale ? 'h4-scaled' : 'h4', color, ...props })} style={styles}>
      {children}
    </h4>
  ),
);

const TextH5 = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, styles = {}, scale, fontColor: color = defaultColor, ...props }, ref) => (
    <h5 ref={ref} className={css({ textStyle: scale ? 'h5-scaled' : 'h5', color, ...props })} style={styles}>
      {children}
    </h5>
  ),
);

const TextH6 = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, styles = {}, scale, fontColor: color = 'text.secondary', ...props }, ref) => (
    <h6 ref={ref} className={css({ textStyle: scale ? 'h6-scaled' : 'h6', color, ...props })} style={styles}>
      {children}
    </h6>
  ),
);

const Body = forwardRef<HTMLParagraphElement, BodyProps>(
  (
    {
      children,
      styles = {},
      scale,
      inline = false,
      mono = false,
      variant = 'text',
      size = 'md',
      truncate = false,
      fontWeight,
      fontColor: color,
      ...props
    },
    ref,
  ) => {
    const classStyles = text({ mono, variant, size, scale });
    const fontWeightStyle = fontWeight ?? (variant !== 'text' ? 'medium' : 'normal');
    const bodyProps = {
      ref,
      className: cx(classStyles, css({ truncate, fontWeight: fontWeightStyle, color, ...props })),
      style: styles,
    };

    if (inline) {
      return <span {...bodyProps}>{children}</span>;
    }

    return <p {...bodyProps}>{children}</p>;
  },
);

const TextMono = forwardRef<HTMLParagraphElement, BodyProps>((props, ref) => {
  return <Body ref={ref} mono {...props} />;
});

const Text = Object.assign(Body, {
  H1: TextH1,
  H2: TextH2,
  H3: TextH3,
  H4: TextH4,
  H5: TextH5,
  H6: TextH6,
  Mono: TextMono,
});

Body.displayName = 'Text';
TextH1.displayName = 'Text.H1';
TextH2.displayName = 'Text.H2';
TextH3.displayName = 'Text.H3';
TextH4.displayName = 'Text.H4';
TextH5.displayName = 'Text.H5';
TextH6.displayName = 'Text.H6';
TextMono.displayName = 'Text.Mono';

export default Text;
