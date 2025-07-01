import "./style.scss";

import { Fragment, useMemo, useState, useEffect } from "react";

import ClientMarkdown from "../../../../../components/client-side/ClientMarkdown";
import type { TestimonialData } from "./type";

type Props = {
  data: Array<TestimonialData>;
};

export default function Component({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    if (data.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [data.length]);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="testimonials-content">
      {/* <p>Testimonials</p> */}
      <div className="track">
        <div className="custom-carousel">
          <Testimonial data={data[currentIndex]} />
        </div>
        
        {data.length > 1 && (
          <div className="carousel-dots">
            {data.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
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
          <div className="image-logo-wrapper">
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
        </div>
        <div className="right">
          <div className="info">
            <p className="name">{data.title}</p>
            {data.subtitle !== undefined && (
              <p className="description">{data.subtitle}</p>
            )}
            <div className="divider" />
          </div>
          <div className="content pre-styled">
            {data.markdownRaw !== undefined && <ClientMarkdown data={data.markdownRaw} />}
          </div>
        </div>
      </div>
    </div>
  );
};
