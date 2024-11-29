import type { ReactNode } from "react";

export type ClientScrollSlideProps = {
  title: string;
  content: ReactNode;
  image: string;
  variant: ClientScrollVariant;
  cardVariant?: ClientScrollCardVariant;
  mobile?: boolean;
};

export enum ClientScrollCardVariant {
  LINES,
  CIRCLES,
}

export enum ClientScrollVariant {
  SIMPLE,
  CARD,
}
