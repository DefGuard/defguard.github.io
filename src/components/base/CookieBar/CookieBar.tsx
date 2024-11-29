import "./style.scss";

import { shallow } from "zustand/shallow";

import { Button } from "../../buttons/Button/Button";
import { useAppStore } from "../../clientStores/appStore";

export const CookieBar = () => {
  const setAppStore = useAppStore((s) => s.setState, shallow);
  const cookiesAccepted = useAppStore((s) => s.cookiesAccepted);

  if (cookiesAccepted) return null;

  return (
    <div id="cookie-bar">
      <p>We use cookies to improve this website.</p>
      <p>
        More details in our{" "}
        <a href="/privacy/" target="_self" data-astro-preload="hover">
          Privacy Policy
        </a>
      </p>
      <Button
        size="small"
        text="I agree"
        onClick={() => {
          setAppStore({ cookiesAccepted: true });
        }}
      />
    </div>
  );
};
