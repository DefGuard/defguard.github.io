import "./style.scss";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { getCookie, setCookie } from "typescript-cookie";
import { Button } from "../../buttons/Button/Button";

const cookieName = "cookies-accepted";

type CookieStore = {
  accepted: boolean;
};

export const CookieBar = () => {
  const visible = useSignal(false);

  useEffect(() => {
    const cookie = getCookie(cookieName);
    if (cookie) {
      const { accepted } = JSON.parse(cookie) as CookieStore;
      if (!accepted) {
        visible.value = true;
      }
    } else {
      visible.value = true;
    }
  }, []);

  if(!visible.value) return null;

  return (
    <div id="cookie-bar">
      <p>We use cookies to improve this website.</p>
      <Button
        size="small"
        text="I agree"
        onClick={() => {
          const cookie: CookieStore = { accepted: true };
          setCookie(cookieName, JSON.stringify(cookie));
          visible.value = false;
        }}
      />
    </div>
  );
};
