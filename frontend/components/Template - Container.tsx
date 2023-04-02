import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  HTMLAttributes,
} from 'react';
import clsx from 'clsx';

interface OuterContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface InnerContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const OuterContainerRender: ForwardRefRenderFunction<
  HTMLDivElement,
  OuterContainerProps
> = ({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};

const InnerContainerRender: ForwardRefRenderFunction<
  HTMLDivElement,
  InnerContainerProps
> = ({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
};

const ContainerRender: ForwardRefRenderFunction<
  HTMLDivElement,
  OuterContainerProps
> = ({ children, ...props }, ref) => {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = forwardRef(OuterContainerRender);
const InnerContainer = forwardRef(InnerContainerRender);
const Container = forwardRef(ContainerRender);

export const Container = forwardRef(ContainerRender);

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
