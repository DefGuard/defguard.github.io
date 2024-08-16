import { useEffect, useState } from "preact/hooks";

const MD_SIZE = 768;

export const DefguardIcon = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = () => {
    console.log(width);
    return width < MD_SIZE;
  };

  return (
    <>
      {isMobile() && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="208"
          height="208"
          viewBox="0 0 208 208"
          fill="none"
        >
          <rect width="208" height="208" rx="30" fill="#0C8CE0" />
          <path
            d="M134.105 26V59.7939L104.602 42.897L66.625 64.6347V146.714L104.571 168.452L134.074 151.555V168.97L119.798 177.159L128.241 182L142.517 173.81V103.239L104.571 81.5012L75.0677 98.3981V69.445L104.571 52.548L134.074 69.445V79.0656L142.517 83.9063V30.8407L134.074 26H134.105ZM75.0677 141.874V112.92L104.571 129.817L134.074 112.92V141.874L104.571 158.77L75.0677 141.874ZM129.868 105.674L104.571 120.166L79.2737 105.674L104.571 91.1827L129.868 105.674Z"
            fill="#F9F9F9"
          />
        </svg>
      )}
      {!isMobile() && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="288"
          viewBox="0 0 140 288"
          fill="none"
        >
          <path
            d="M124.289 0.75V62.8138L70.105 31.7819L0.359375 71.704V222.446L70.0486 262.369L124.232 231.337V263.319L98.0145 278.36L113.52 287.25L139.738 272.209V142.602L70.0486 102.68L15.8647 133.712V80.5384L70.0486 49.5064L124.232 80.5384V98.207L139.738 107.097V9.64022L124.232 0.75H124.289ZM15.8647 213.556V160.383L70.0486 191.415L124.232 160.383V213.556L70.0486 244.588L15.8647 213.556ZM116.508 147.075L70.0486 173.69L23.5891 147.075L70.0486 120.46L116.508 147.075Z"
            fill="#F9F9F9"
          />
        </svg>
      )}
    </>
  );
};
