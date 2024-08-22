import { useRef, useState } from 'preact/hooks';
import './style.scss';

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
    <div class="image">
      <img src={imageSrc} alt={altText} onClick={handleImageClick} class="small" />
      {description}
      {isModalOpen && (
        <div className="modal">
          <div class="box"> 
            <img src={imageSrc} alt={altText} class="large" onClick={handleCloseModal}/>
            {description}
          </div>
        </div>
      )}
    </div>
  );
};