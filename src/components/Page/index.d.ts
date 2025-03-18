import { Content } from "./Content";
import { Header } from "./Header";
import { SideBar } from "./Layout/Sidebar";
type PageProps = {
    children: React.ReactElement<typeof Header | typeof Content | typeof SideBar>[] | React.ReactElement<typeof Header | typeof Content>;
};
type Props = React.HTMLAttributes<HTMLDivElement> & PageProps;
export declare const Page: {
    ({ children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
    Header: ({ children, id, level, ...rest }: import("react").HTMLAttributes<HTMLHeadingElement> & {
        children: import("react").ReactNode;
        id?: string;
        level?: 1 | 2 | 3 | 4 | 5 | 6;
    }) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, ...rest }: import("react").HTMLAttributes<HTMLDivElement> & {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
export {};
