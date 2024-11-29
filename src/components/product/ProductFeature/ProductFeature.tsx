import "./style.scss";

import { clsx } from "clsx";
import type { ReactNode } from "react";

import { useFeaturesStore } from "./store";

interface Props {
  title: string;
  children: ReactNode;
  context: string;
  id: number;
}

export const ProductFeature = ({ title, children, id, context }: Props) => {
  const isActive = useFeaturesStore((s) => s.activeFeatures[context] === id);
  const setOpen = useFeaturesStore((s) => s.setOpen);

  return (
    <div className="product-feature">
      <header
        onClick={() => {
          if (isActive) {
            setOpen(undefined, context);
          } else {
            setOpen(id, context);
          }
        }}
      >
        <h2>{title}</h2>
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={clsx({
              expanded: isActive,
            })}
          >
            <path
              d="M8 2V14"
              style={{
                stroke: "var(--text-body-primary)",
              }}
            ></path>
            <path
              d="M2 8H14"
              style={{
                stroke: "var(--text-body-primary)",
              }}
            ></path>
          </svg>
        </div>
      </header>
      <div
        className={clsx("content-container", {
          expanded: isActive,
        })}
      >
        <div slot="content">{children}</div>
      </div>
    </div>
  );
};
