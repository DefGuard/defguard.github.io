import { useSignal } from "@preact/signals";
import { clsx } from 'clsx';

import type { ComponentChildren } from "preact";
import './style.scss';

interface Props {
    title: string;
    children: ComponentChildren,
}

export const ProductFeature = ({ title, children }: Props) => {
    const expanded = useSignal(false);

    return (
        <div class="product-feature">
            <header onClick={() => {
                expanded.value = !expanded.value;
            }}>
                <h2>{title}</h2>
                <div class="icon-container">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        class={clsx({
                            expanded: expanded.value
                        })}
                    >
                        <path d="M8 2V14" style="stroke: var(--text-body-primary);"></path>
                        <path d="M2 8H14" style="stroke: var(--text-body-primary);"></path>
                    </svg>
                </div>
            </header>
            <div class={clsx('content-container', {
                expanded: expanded.value
            })}>
                <div slot="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
