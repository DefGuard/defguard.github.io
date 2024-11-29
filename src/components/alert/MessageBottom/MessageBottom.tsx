import "./style.scss";

import { Button } from "../../buttons/Button/Button";

interface MessageProps {
  message: string;
  handleButton: () => void;
}

const MessageBottom = ({ message, handleButton }: MessageProps) => {
  return (
    <div id="message">
      {message}
      <Button type="submit" text="OK" size="small" onClick={handleButton} />
    </div>
  );
};

export default MessageBottom;
