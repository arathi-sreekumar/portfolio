import { JSX } from "react";
import { PageType } from "../../../types/layout";
export type HomePageProps = {
    header?: string | JSX.Element;
    children: React.ReactNode;
    pageType: PageType;
};
export declare const HomePageLayout: ({ header: headerProp, pageType, children, }: HomePageProps) => import("react/jsx-runtime").JSX.Element;
