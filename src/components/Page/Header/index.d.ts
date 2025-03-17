import { ReactNode } from "react";
type Level = 1 | 2 | 3 | 4 | 5 | 6;
type HeaderProps = {
    children: ReactNode;
    id?: string;
    level?: Level;
};
type Props = React.HTMLAttributes<HTMLHeadingElement> & HeaderProps;
export declare const Header: ({ children, id, level, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
