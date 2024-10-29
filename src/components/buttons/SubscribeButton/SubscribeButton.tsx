import { Button } from "../Button/Button";
import { useStore } from "@nanostores/preact";
import { isChecked } from "../../Checkbox/isCheckedStore";
import "./style.scss";

export const SubscribeButton = () => {
  const $isChecked = useStore(isChecked);

  return (
    <Button type="submit" text="Subscribe Now" size="normal" disabled={!$isChecked} />
  );
};
