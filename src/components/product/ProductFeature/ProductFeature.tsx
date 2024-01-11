import { signal } from "@preact/signals";
import './style.scss';

const expanded = signal(false);

interface Props {
    title: string;
}

export const ProductFeature = ({ title }: Props) => {
    return (
        <div class="product-feature">
            <header>
                <h2>{title}</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path d="M8 2V14" style="stroke: var(--text-body-primary);"></path>
                    <path d="M2 8H14" style="stroke: var(--text-body-primary);"></path>
                </svg>
            </header>
            <div class="content" slot="content">
            </div>
        </div>
    );
}
