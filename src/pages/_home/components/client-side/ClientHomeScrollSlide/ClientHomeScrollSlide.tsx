import "./style.scss";

import type { ReactNode } from "react";

import { Divider } from "../../../../../components/client-side/Divider/Divider";
import ScrollSlideCard from "./components/ScrollSlideCard/ScrollSlideCard";
import {
  ClientScrollCardVariant,
  type ClientScrollSlideProps,
  ClientScrollVariant,
} from "./type";

const renderContent = (input: ReactNode) => {
  if (typeof input === "string") {
    return <p>{input}</p>;
  }
  return <>{input}</>;
};

const ClientHomeScrollSlide = (props: ClientScrollSlideProps) => {
  switch (props.variant) {
    case ClientScrollVariant.CARD:
      return <CardVariant {...props} />;
    case ClientScrollVariant.SIMPLE:
      return <SimpleVariant {...props} />;
  }
};

const SimpleVariant = ({ content, image, title }: ClientScrollSlideProps) => {
  return (
    <div className="client-scroll-slide simple">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="bottom">
        <div className="image">
          <img src={image} alt="slide image" />
        </div>
        <div className="content">{renderContent(content)}</div>
      </div>
    </div>
  );
};

const CardVariant = ({
  content,
  image,
  title,
  cardVariant = ClientScrollCardVariant.LINES,
  mobile = false,
}: ClientScrollSlideProps) => {
  if (mobile) {
    return (
      <div className="client-scroll-slide card mobile">
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="content">{renderContent(content)}</div>
        <div className="image">
          <img src={image} alt="slide image" loading="lazy" decoding="async" />
        </div>
      </div>
    );
  }

  if (!mobile)
    return (
      <div className="client-scroll-slide card">
        <ScrollSlideCard title={title} variant={cardVariant} />
        <div className="right">
          <div className="content">{renderContent(content)}</div>
          <Divider />
          <div className="image">
            <img src={image} alt="slide image" />
          </div>
        </div>
      </div>
    );
};

export default ClientHomeScrollSlide;
