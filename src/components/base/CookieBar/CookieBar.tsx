import "./style.scss";

import { useEffect, useState } from "react";
import { getCookie, setCookie } from "typescript-cookie";

import { Button } from "../../buttons/Button/Button";

const cookieName = "cookies-accepted";

type CookieStore = {
  accepted: boolean;
};

export const CookieBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookie = getCookie(cookieName);
    if (cookie) {
      const { accepted } = JSON.parse(cookie) as CookieStore;
      if (!accepted) {
        setVisible(true);
      }
    } else {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div id="cookie-bar">
      <p>We use cookies to improve this website.</p>
      <Button
        size="small"
        text="I agree"
        onClick={() => {
          const cookie: CookieStore = { accepted: true };
          setCookie(cookieName, JSON.stringify(cookie));
          setVisible(false);
        }}
      />
    </div>
  );
};
