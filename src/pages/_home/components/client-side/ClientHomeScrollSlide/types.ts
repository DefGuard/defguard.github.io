export enum ClientScrollVariant {
  CARD = 'card',
  SIMPLE = 'simple',
}

export enum ClientScrollCardVariant {
  LINES = 'lines',
  CIRCLES = 'circles',
}

export interface ClientScrollSlideProps {
  title: string;
  content: string | React.ReactNode;
  image: string;
  variant?: ClientScrollVariant;
  cardVariant?: ClientScrollCardVariant;
  mobile?: boolean;
} 