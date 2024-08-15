import "./style.scss";
import { useStore } from "@nanostores/preact";
import { isChecked } from "./isCheckedStore";

export default function Checkbox() {
  const $isChecked = useStore(isChecked);

  return (
    <label for="agree-terms">
      <input
        type="checkbox"
        id="agree-terms"
        onClick={() => {
          console.log("dupa");
          isChecked.set(!$isChecked);
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="23" height="23" />
        {$isChecked && <path d="M4 10L12 17.5L20 7" />}
      </svg>
    </label>
  );
}
