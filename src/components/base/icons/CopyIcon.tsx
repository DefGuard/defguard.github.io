interface CopyProps {
  textToCopy: string;
}

export const CopyIcon = ({ textToCopy }: CopyProps) => {
  return (
    <div onClick={() => navigator.clipboard.writeText(textToCopy)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M7 6.5H6.5V7V9.5H1.5V1.5H9.5V6.5H7Z" stroke="#222222" />
        <rect x="6.5" y="6.5" width="8" height="8" stroke="#222222" />
      </svg>
    </div>
  );
};
