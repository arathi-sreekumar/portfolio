import { JSX } from "react";
import { PageType } from "../../../types/layout";
export type TwoColumnProps = {
    header?: string | JSX.Element;
    sidebar?: React.ReactNode;
    children: React.ReactNode;
    pageType: PageType;
};
export declare const TwoColumnLayoutWithImage: ({ header: headerProp, sidebar, pageType, children, }: TwoColumnProps) => import("react/jsx-runtime").JSX.Element;
