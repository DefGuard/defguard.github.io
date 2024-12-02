import "./style.scss";

import clsx from "clsx";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { ScrollSliderSlide } from "./types";

type Props = {
  id: string;
  className?: string;
  components: ScrollSliderSlide[];
};
/**Scroll based slides made with motion for react */
const ScrollSlider = ({ components, className, id }: Props) => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(mainRef);
  const [activeIndex, setActive] = useState(0);

  const triggers = useMemo(() => components.map((c) => `trigger-${c.id}`), [components]);

  const handleControlClick = useCallback(
    (index: number) => {
      if (index == activeIndex) return;
      const element = document.getElementById(triggers[index]);
      if (element) {
        const rect = element.getBoundingClientRect();
        const top = rect.top + (rect.height * 40) / 100 + window.scrollY;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    },
    [activeIndex, triggers],
  );

  useEffect(() => {
    if (!inView && mainRef.current) {
      const rect = mainRef.current.getBoundingClientRect();
      if (rect.top + rect.height < window.scrollY) {
        setActive(components.length - 1);
      }
      if (rect.top > window.scrollY && activeIndex !== 0) {
        setActive(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className={clsx("scroll-slider", className)} id={id} ref={mainRef}>
      <div className="floating">
        <div className="floating-island">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.49,
              }}
              className="floating-content"
            >
              {components[activeIndex].component}
            </motion.div>
          </AnimatePresence>
          <div className="controls">
            <div className="controls-track">
              {triggers.map((t, i) => (
                <div className="control" key={t}>
                  <button
                    className="track-click"
                    onClick={() => {
                      handleControlClick(i);
                    }}
                    aria-label={`show slide ${i + 1} button`}
                  ></button>
                  <div className="track-indicator">
                    <div className="line"></div>
                  </div>
                  {i === activeIndex && (
                    <motion.div
                      layoutId={`${id}-active-control`}
                      className="active-indicator"
                      initial={false}
                    ></motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="triggers">
        {triggers.map((t, index) => (
          <Trigger
            key={t}
            id={t}
            onChange={() => {
              setActive(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

type TriggerProps = {
  id: string;
  onChange: () => void;
};

const Trigger = ({ id, onChange }: TriggerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.4,
  });

  useEffect(() => {
    if (inView) {
      onChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <div className="trigger" id={id} ref={ref}></div>;
};

export default ScrollSlider;
