import { ButtonStyles } from "../../../types/form";
type Props = {
    styleType?: ButtonStyles;
};
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;
export declare const Button: ({ children, styleType, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
