import { useSignal, useSignalEffect } from "@preact/signals";
import { clsx } from 'clsx';

import type { ComponentChildren } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import './style.scss';
import { FeatureContext } from "./ProductFeatureContext";

interface Props {
    title: string;
    children: ComponentChildren;
    id: number;
}

export const ProductFeature = ({ title, children, id }: Props) => {
    const {openFeature, setOpen} = useContext(FeatureContext);

    const isOpen = openFeature === id;

    return (
        <div class="product-feature">
            <header onClick={() => {
                if(isOpen) {
                    setOpen(undefined);
                } else {
                    setOpen(id);
                }
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
                            expanded: isOpen
                        })}
                    >
                        <path d="M8 2V14" style="stroke: var(--text-body-primary);"></path>
                        <path d="M2 8H14" style="stroke: var(--text-body-primary);"></path>
                    </svg>
                </div>
            </header>
            <div class={clsx('content-container', {
                expanded: isOpen
            })}>
                <div slot="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
