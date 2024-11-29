import "./style.scss";

import { useState } from "react";

interface Props {
  imageSrc: string;
  altText: string;
  description: string;
}

export const ImageModal = ({ imageSrc, altText, description }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="image">
      <img src={imageSrc} alt={altText} onClick={handleImageClick} className="small" />
      {description}
      {isModalOpen && (
        <div className="modal">
          <div className="box">
            <img
              src={imageSrc}
              alt={altText}
              className="large"
              onClick={handleCloseModal}
            />
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
