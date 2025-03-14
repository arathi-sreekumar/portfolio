import { JSX } from "react";
import { PageType } from "../../../types/layout";
export type TwoColumnProps = {
    header?: string | JSX.Element;
    children: string | JSX.Element | JSX.Element[];
    pageType: PageType;
};
export declare const TwoColumnLayoutWithImage: ({ header: headerProp, pageType, children, }: TwoColumnProps) => import("react/jsx-runtime").JSX.Element;
