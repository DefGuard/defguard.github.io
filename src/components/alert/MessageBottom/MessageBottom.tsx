import { Button } from "../../buttons/Button/Button";
import "./style.scss";

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
