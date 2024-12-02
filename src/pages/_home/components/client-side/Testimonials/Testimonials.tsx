import "./style.scss";
import "react-multi-carousel/lib/styles.css";

import { Fragment, useMemo } from "react";
import Carousel from "react-multi-carousel";

import ClientMarkdown from "../../../../../components/client-side/ClientMarkdown";
import type { TestimonialData } from "./type";

type Props = {
  data: Array<TestimonialData>;
};

export default function Component({ data }: Props) {
  const slides = useMemo(
    () => data.map((d, i) => <Testimonial data={d} key={i} />),
    [data],
  );
  return (
    <div className="testimonials-content">
      <p>Testimonials</p>
      <div className="track">
        {slides.length <= 1 && <Fragment>{slides}</Fragment>}
        {slides.length > 1 && (
          <Carousel
            draggable={false}
            minimumTouchDrag={80}
            arrows={false}
            showDots={true}
            dotListClass="carousel-dots"
            responsive={{
              desktop: {
                breakpoint: {
                  min: 0,
                  max: 9999,
                },
                items: 1,
              },
            }}
          >
            {slides}
          </Carousel>
        )}
      </div>
    </div>
  );
}

type TestimonialProps = {
  data: TestimonialData;
};

const Testimonial = ({ data }: TestimonialProps) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <div className="left">
          <div className="image">
            <img
              src={data.imagePrimary}
              alt="person image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="logo">
            <img
              src={data.imageSecondary}
              alt="logo image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="right">
          <div className="info">
            <p className="name">{data.title}</p>
            {data.subtitle !== undefined && (
              <p className="description">{data.subtitle}</p>
            )}
          </div>
          <div className="content pre-styled">
            {data.markdownRaw !== undefined && <ClientMarkdown data={data.markdownRaw} />}
          </div>
        </div>
      </div>
    </div>
  );
};
