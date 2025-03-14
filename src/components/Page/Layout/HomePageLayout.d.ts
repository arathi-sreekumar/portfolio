import { JSX } from "react";
import { PageType } from "../../../types/layout";
export type HomePageProps = {
    header?: string | JSX.Element;
    children: string | JSX.Element | JSX.Element[];
    pageType: PageType;
};
export declare const HomePageLayout: ({ header: headerProp, pageType, children, }: HomePageProps) => import("react/jsx-runtime").JSX.Element;
