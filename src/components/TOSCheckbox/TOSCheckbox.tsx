import "./style.scss";

type Props = {
  value: boolean;
  onChange: () => void;
};

export default function TOSCheckbox({ onChange, value }: Props) {
  return (
    <label htmlFor="agree-terms">
      <input
        type="checkbox"
        id="agree-terms"
        onClick={() => {
          onChange();
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
        {value && <path d="M4 10L12 17.5L20 7" />}
      </svg>
    </label>
  );
}
