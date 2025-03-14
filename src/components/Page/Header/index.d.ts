import { JSX } from "react";
type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Props = {
    children: JSX.Element | string;
    id?: string;
    level?: Level;
};
export declare const Header: ({ children, id, level, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
