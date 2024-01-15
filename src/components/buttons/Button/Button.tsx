import clsx from 'clsx';
import type { ComponentChildren } from 'preact';
import './style.scss';

type Props = {
    text: string;
    children?: ComponentChildren;
    onClick?: () => void;
    size?: 'small' | 'normal' | 'large';
};

export const Button = ({ children, onClick, text, size = "normal" }: Props) => {
    return (<button class={clsx("btn", `size-${size}`)} onClick={onClick}><span>{text}</span>{children}</button>);
}
