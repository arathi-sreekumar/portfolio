import { JSX } from "react";
type OwnProps = {
    children: JSX.Element | JSX.Element[] | string;
};
type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps;
export declare const Content: ({ children, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
