import React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
  className?: string;
  text?: string;
  __enableDangerousHTML?: boolean;
} & Omit<React.ComponentPropsWithoutRef<C>, "children">;

const ContentText = <C extends React.ElementType = "p">({
  as,
  text,
  __enableDangerousHTML,
  className,
  ...props
}: AsProp<C>) => {
  if (!text) return null;

  const Component = as || "p";

  if (__enableDangerousHTML) {
    return (
      <Component
        className={className}
        dangerouslySetInnerHTML={{ __html: text || "" }}
        {...props}
      />
    );
  }
  return (
    <Component className={className} {...props}>
      {text}
    </Component>
  );
};

export default ContentText;
