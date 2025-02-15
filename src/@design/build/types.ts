export interface Color {
  "primary": "#45c5af";
  "primary-light": "#6dd3c0";
  "primary-dark": "#359e8c";
  "secondary": "#dafdb9";
  "success": "#28a745";
  "warning": "#e9ab30";
  "error": "#e14e5e";
  "text-base": "#E9E9E9";
  "text-muted": "#B2B2B2";
  "bg-base": "#020B13";
  "bg-100": "#09131D";
}

export interface Spacing {
  "0": "0rem";
  "1": "0.5rem";
  "2": "1rem";
  "3": "1.5rem";
  "4": "2rem";
  "5": "2.5rem";
  "6": "3rem";
  "7": "3.5rem";
  "8": "4rem";
  "9": "4.5rem";
  "10": "5rem";
  "11": "5.5rem";
  "12": "6rem";
  "13": "6.5rem";
  "14": "7rem";
  "15": "7.5rem";
  "16": "8rem";
  "17": "8.5rem";
  "18": "9rem";
  "19": "9.5rem";
  "20": "10rem";
  "0-5": "0.25rem";
  "0-75": "0.375rem";
  "1-5": "0.75rem";
  "2-5": "1.25rem";
  "3-5": "1.75rem";
  "auto": "auto";
}

export interface Breakpoints {
  "xs": "480px";
  "sm": "640px";
  "md": "768px";
  "lg": "1024px";
  "xl": "1280px";
  "xxl": "1400px";
}

export interface Textalign {
  "left": "left";
  "right": "right";
  "center": "center";
}

export interface TypographyFontFamily {
  "main": "var(--font-aptos)";
}

export interface TypographyFontSize {
  "sm": "clamp(1rem, 0.875rem + 0.8vw, 1.125rem)";
  "base": "clamp(1.125rem, 0.8125rem + 1vw, 1.25rem)";
  "lg": "clamp(1.5rem, 1.125rem + 1.5vw, 2rem)";
  "xl": "clamp(2rem, 1.5rem + 2vw, 2.75rem)";
  "xxl": "clamp(3rem, 2.5rem + 2.5vw, 4rem)";
}

export interface Typography {
  "fontFamily": TypographyFontFamily;
  "fontSize": TypographyFontSize;
}

export interface BorderColor {
  "base": "rgba($color-primary-light, 0.35)";
  "light": "rgba($color-primary-light, 0.15)";
}

export interface BorderRadius {
  "base": "0.65rem";
  "lg": "1.25rem";
}

export interface BorderWidth {
  "base": "1px";
}

export interface Border {
  "color": BorderColor;
  "radius": BorderRadius;
  "width": BorderWidth;
}

export interface BoxShadow {
  "base": "0 0 20px 2px rgba(0, 0, 0, 0.35)";
  "base-hover": "0 0 20px 2px rgba(0, 0, 0, 0.5)";
}

export interface AnimationDelay {
  "1": "500ms";
  "2": "1000ms";
  "3": "1500ms";
  "4": "2000ms";
  "5": "2500ms";
}

export interface AnimationTransition {
  "base": "120ms ease-in";
}

export interface Animation {
  "delay": AnimationDelay;
  "transition": AnimationTransition;
}

export interface DesignTokens {
  "color": Color;
  "spacing": Spacing;
  "breakpoints": Breakpoints;
  "text-align": Textalign;
  "typography": Typography;
  "border": Border;
  "boxShadow": BoxShadow;
  "animation": Animation;
}
