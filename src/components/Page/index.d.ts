import { Content } from "./Content";
import { Header } from "./Header";
interface PageProps {
    children: React.ReactElement<typeof Header | typeof Content>[] | React.ReactElement<typeof Header | typeof Content>;
}
export declare const Page: {
    ({ children }: PageProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ children, id, level, }: {
        children: import("react").JSX.Element | string;
        id?: string;
        level?: 1 | 2 | 3 | 4 | 5 | 6;
    }) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, ...rest }: import("react").HTMLAttributes<HTMLDivElement> & {
        children: import("react").JSX.Element | import("react").JSX.Element[] | string;
    }) => import("react/jsx-runtime").JSX.Element;
};
export {};
